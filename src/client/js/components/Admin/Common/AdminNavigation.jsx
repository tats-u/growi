import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import urljoin from 'url-join';

const AdminNavigation = (props) => {
  const { t } = props;
  const pathname = window.location.pathname;

  const isActiveMenu = (path) => {
    return (pathname.startsWith(urljoin('/admin', path)));
  };

  return (
    <div>
      <div className="list-group admin-navigation d-none d-md-block">
        <a href="/admin" className={`list-group-item list-group-item-action border-0 round-corner ${pathname === '/admin' && 'active'}`}>
          <i className="icon-fw icon-home"></i> {t('Management Wiki Home')}
        </a>
        <a href="/admin/app" className={`list-group-item list-group-item-action border-0 round-corner ${isActiveMenu('/app') && 'active'}`}>
          <i className="icon-fw icon-settings"></i> {t('App Settings')}
        </a>
        <a href="/admin/security" className={`list-group-item list-group-item-action border-0 round-corner  ${isActiveMenu('/security') && 'active'}`}>
          <i className="icon-fw icon-shield"></i> {t('security_settings')}
        </a>
        <a href="/admin/markdown" className={`list-group-item list-group-item-action border-0 round-corner ${isActiveMenu('/markdown') && 'active'}`}>
          <i className="icon-fw icon-note"></i> {t('Markdown Settings')}
        </a>
        <a href="/admin/customize" className={`list-group-item list-group-item-action border-0 round-corner ${isActiveMenu('/customize') && 'active'}`}>
          <i className="icon-fw icon-wrench"></i> {t('Customize')}
        </a>
        <a href="/admin/importer" className={`list-group-item list-group-item-action border-0 round-corner ${isActiveMenu('/importer') && 'active'}`}>
          <i className="icon-fw icon-cloud-upload"></i> {t('Import Data')}
        </a>
        <a href="/admin/export" className={`list-group-item list-group-item-action border-0 round-corner ${isActiveMenu('/export') && 'active'}`}>
          <i className="icon-fw icon-cloud-download"></i> {t('Export Archive Data')}
        </a>
        <a
          href="/admin/notification"
          className={
            `list-group-item list-group-item-action border-0 round-corner
            ${(isActiveMenu('/notification') || isActiveMenu('/global-notification')) && 'active'}`
          }
        >
          <i className="icon-fw icon-bell"></i> {t('Notification Settings')}
        </a>
        <a href="/admin/users" className={`list-group-item list-group-item-action border-0 round-corner ${(isActiveMenu('/users')) && 'active'}`}>
          <i className="icon-fw icon-user"></i> {t('User_Management')}
        </a>
        <a href="/admin/user-groups" className={`list-group-item list-group-item-action border-0 round-corner ${isActiveMenu('/user-group') && 'active'}`}>
          <i className="icon-fw icon-people"></i> {t('UserGroup Management')}
        </a>
        <a href="/admin/search" className={`list-group-item list-group-item-action border-0 round-corner ${isActiveMenu('/search') && 'active'}`}>
          <i className="icon-fw icon-magnifier"></i> {t('Full Text Search Management')}
        </a>
      </div>
      <div className="dropdown d-block d-md-none">
        <button
          className="btn btn-outline-secondary dropdown-toggle col-12 text-right"
          type="button"
          id="dropdown-admin-navigation"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="float-left"><i className="icon-fw icon-home"></i>
            {pathname === '/admin' && t('Management Wiki Home')}
            {pathname === '/admin/app' && t('App Settings')}
            {pathname === '/admin/security' && t('security_settings')}
            {pathname === '/admin/markdown' && t('Markdown Settings')}
            {pathname === '/admin/customize' && t('Customize')}
            {pathname === '/admin/importer' && t('Import Data')}
            {pathname === '/admin/export' && t('Export Archive Data')}
            {pathname === ('/admin/notification' || '/admin/global-notification') && t('Notification Settings')}
            {pathname === '/admin/users' && t('User_Management')}
            {pathname === '/admin/user-groups' && t('UserGroup Management')}
            {pathname === '/admin/search' && t('Full Text Search Management')}
          </span>
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdown-admin-navigation">
          <a href="/admin" className={`dropdown-item ${pathname === '/admin' && 'active'}`}>
            <i className="icon-fw icon-home"></i> {t('Management Wiki Home')}
          </a>
          <a href="/admin/app" className={`dropdown-item ${isActiveMenu('/app') && 'active'}`}>
            <i className="icon-fw icon-settings"></i> {t('App Settings')}
          </a>
          <a href="/admin/security" className={`dropdown-item  ${isActiveMenu('/security') && 'active'}`}>
            <i className="icon-fw icon-shield"></i> {t('security_settings')}
          </a>
          <a href="/admin/markdown" className={`dropdown-item ${isActiveMenu('/markdown') && 'active'}`}>
            <i className="icon-fw icon-note"></i> {t('Markdown Settings')}
          </a>
          <a href="/admin/customize" className={`dropdown-item ${isActiveMenu('/customize') && 'active'}`}>
            <i className="icon-fw icon-wrench"></i> {t('Customize')}
          </a>
          <a href="/admin/importer" className={`dropdown-item ${isActiveMenu('/importer') && 'active'}`}>
            <i className="icon-fw icon-cloud-upload"></i> {t('Import Data')}
          </a>
          <a href="/admin/export" className={`dropdown-item ${isActiveMenu('/export') && 'active'}`}>
            <i className="icon-fw icon-cloud-download"></i> {t('Export Archive Data')}
          </a>
          <a
            href="/admin/notification"
            className={
              `dropdown-item ${(isActiveMenu('/notification') || isActiveMenu('/global-notification')) && 'active'}`
            }
          >
            <i className="icon-fw icon-bell"></i> {t('Notification Settings')}
          </a>
          <a href="/admin/users" className={`dropdown-item ${(isActiveMenu('/users')) && 'active'}`}>
            <i className="icon-fw icon-user"></i> {t('User_Management')}
          </a>
          <a href="/admin/user-groups" className={`dropdown-item ${isActiveMenu('/user-group') && 'active'}`}>
            <i className="icon-fw icon-people"></i> {t('UserGroup Management')}
          </a>
          <a href="/admin/search" className={`dropdown-item ${isActiveMenu('/search') && 'active'}`}>
            <i className="icon-fw icon-magnifier"></i> {t('Full Text Search Management')}
          </a>
        </div>
      </div>
    </div>
  );
};


AdminNavigation.propTypes = {
  t: PropTypes.func.isRequired, // i18next

};

export default withTranslation()(AdminNavigation);
