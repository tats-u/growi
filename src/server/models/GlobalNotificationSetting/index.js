const mongoose = require('mongoose');
const nodePath = require('path');
const { pathUtils } = require('growi-commons');

/**
 * parent schema for GlobalNotificationSetting model
 */
const globalNotificationSettingSchema = new mongoose.Schema({
  isEnabled: { type: Boolean, required: true, default: true },
  triggerPath: { type: String, required: true },
  triggerEvents: { type: [String] },
});

/**
 * global notifcation event master
 */
globalNotificationSettingSchema.EVENT = {
  PAGE_CREATE: 'pageCreate',
  PAGE_EDIT: 'pageEdit',
  PAGE_DELETE: 'pageDelete',
  PAGE_MOVE: 'pageMove',
  PAGE_LIKE: 'pageLike',
  COMMENT: 'comment',
};

/*
* e.g. "/a/b/c" => ["/a/b/c", "/a/b", "/a", "/"]
*/
const generatePathsOnTree = (path, pathList) => {
  pathList.push(path);

  if (path === '/') {
    return pathList;
  }

  const newPath = nodePath.posix.dirname(path);

  return generatePathsOnTree(newPath, pathList);
};

/*
* e.g. "/a/b/c" => ["/a/b/c", "/a/b", "/a", "/"]
*/
const generatePathsToMatch = (originalPath) => {
  const pathList = generatePathsOnTree(originalPath, []);
  return pathList.map((path) => {
    // except for the original trigger path ("/a/b/c"), append "*" to find all matches
    // e.g. ["/a/b/c", "/a/b", "/a", "/"] => ["/a/b/c", "/a/b/*", "/a/*", "/*"]
    if (path !== originalPath) {
      return `${pathUtils.addTrailingSlash(path)}*`;
    }

    return path;
  });
};

/**
 * GlobalNotificationSetting Class
 * @class GlobalNotificationSetting
 */
class GlobalNotificationSetting {

  constructor(crowi) {
    this.crowi = crowi;
  }

  /**
   * enable notification setting
   * @param {string} id
   */
  static async enable(id) {
    const setting = await this.findOne({ _id: id });

    setting.isEnabled = true;
    setting.save();

    return setting;
  }

  /**
   * disable notification setting
   * @param {string} id
   */
  static async disable(id) {
    const setting = await this.findOne({ _id: id });

    setting.isEnabled = false;
    setting.save();

    return setting;
  }

  /**
   * find all notification settings
   */
  static async findAll() {
    const settings = await this.find().sort({ triggerPath: 1 });

    return settings;
  }

  /**
   * find a list of notification settings by path and a list of events
   * @param {string} path
   * @param {string} event
   */
  static async findSettingByPathAndEvent(event, path, type) {
    const pathsToMatch = generatePathsToMatch(path);

    const settings = await this.find({
      triggerPath: { $in: pathsToMatch },
      triggerEvents: event,
      __t: type,
      isEnabled: true,
    })
      .sort({ triggerPath: 1 });

    return settings;
  }

}

module.exports = {
  class: GlobalNotificationSetting,
  schema: globalNotificationSettingSchema,
};
