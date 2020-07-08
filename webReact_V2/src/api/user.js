import http from './../untils/http';

class user {
  // 登陆
  userLogin = params => {
    return http.post('/api/UserManage/Authentication/Login', params);
  };
  // 用户退出登录
  Loginout = params => {
    return http.get(`/api/UserManage/Authentication/LoginOut`, params);
  };

  // 获取菜单
  MenuList = params => {
    return http.get('/SysManage/Menu/List',params)
  }
  
}

export default new user