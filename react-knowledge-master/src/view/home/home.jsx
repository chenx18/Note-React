import React, { Component} from 'react';

import store from '@/store/index';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {

		};
	}


	render() {
		return (
			<div>
				<p><a href="https://www.cnblogs.com/dibaosong/p/12661274.html" target="_blank">尝试 React16、React-router4 实现根据动态菜单生成按需加载的路由</a></p>
			</div>
		)
	}
}

export default Home;