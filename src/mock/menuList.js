import Mock from 'mockjs'

export default Mock.mock('/SysManage/Menu/List', 'get', {
  "Code": 1,
  "Message": null,
  "Data":[
    {
      "path": "/operation",
      "name": "operation",
      "menuName": '运营管理',
      "Icon":'vk-home',
      "auth": true,
      "children": [
        { 
         "path": "/comment",
          "name": "comment",
          "component": '../components/Comment/CommentApp',
          "menuName": '评论',
          "Icon":'vk-home',
          "auth": true,
          "children":[]
        }
      ]
    },
    {
      "path": "/todolist",
      "name": "todolist",
      "component": '../components/TodoList',
      "menuName": 'Todo',
      "Icon":'vk-home',
      "auth": true,
      "children": []
    },
  ]
})

