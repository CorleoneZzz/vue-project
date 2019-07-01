var routes =
    [
        {
            path: '/',
            component:
                {
                    template: `<div>
                                <h1>首页</h1>
                                </div>`,
                },
        },
        {
            path: '/about',
            components:
                {
                    sidebar: {
                        template: `<div>
                                <ul>
                                    <li>标签一</li>
                                    <li>标签二</li>
                                </ul>
                                </div>`
                    },
                    main:
                        {
                            template: `<div>
                                <h1>主内容</h1>
                                </div>`
                        }
                },
        },
        {
            name: 'user',
            path: '/user/:name',
            component:
                {
                    //获取url中的参数
                    template: `<div>
                                    <div>
                                    我叫:{{$route.params.name}}
                                    <!--用v-bind绑定-->
                                    <!--<router-link :to="'/user/'+$route.params.name+'/more'">详细信息</router-link>-->
                                    <router-link to="more" append>详细信息</router-link>
                                    <router-view></router-view>
                                    </div>
                               </div>`,
                },
            //子路由
            children:
                [
                    {
                        path: 'more',
                        component:
                            {
                                //获取url中的参数
                                template: `<div>
                                    <div>
                                    用户{{$route.params.name}}的详细信息
                                    俺叫{{$route.params.name}}今年28岁未婚
                                    </div>
                               </div>`,
                            },
                    }
                ]
        }
    ];
var router = new VueRouter(
    {
        routes: routes,
    }
);
new Vue(
    {
        el: '#app',
        router: router,
        methods:
            {
                visitPage() {
                    setTimeout(function () {
                        this.router.push('/about');
                        setTimeout(function () {
                            // this.router.push('/user');
                            //  传参数的写法如下
                            this.router.push({name: 'user', params: {name: '魏淑芬'}});
                        }, 2000)
                    }, 2000)
                }
            }
    }
);