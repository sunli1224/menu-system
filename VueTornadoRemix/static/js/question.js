   // 填入数据
    $(function () {
        var defaultData = [
            {
                text: '入门',
                href: '#',
                tags: ['0'],
                nodes: [
                    {
                        text: '模拟',
                        href: '#child1',
                        tags: ['2']
                    },
                    {
                        text: '暴力',
                        href: '#child2',
                        tags: ['0']
                    },
                    {
                        text: '贪心',
                        href: '#',
                        tags: ['0']
                    },
                    {
                        text: '高精度',
                        href: '#',
                        tags: ['0']
                    },
                    {
                        text: '排序',
                        href: '#',
                        tags: ['0']
                    }
                ]
            },
            {
                text: '图论',
                href: '#parent2',
                tags: ['0'],
                nodes: [
                    {
                        text: '最短路',
                        href: '#',
                        tags: ['0'],
                        nodes:[
                            {
                                text: 'SPFAS',
                                href: '#',
                                tags: ['0']
                            },
                            {
                                text: 'bellman-ford',
                                href: '#',
                                tags:['0']
                            },
                            {
                                text: 'Dijkstra',
                                href: '#',
                                tags: ['0']
                            },
                            {
                                text: 'Johnson',
                                href: '#',
                                tags: ['0']
                            },
                            {
                                text: 'Floyd',
                                href: '#',
                                tags: ['0']
                            },
                            {
                                text: '差分约束',
                                href: "#",
                                tags: ['0']
                            },
                            {
                                text: '第k短路',
                                href: "#",
                                tags: ['0']
                            }
                        ]
                    },
                    {
                        text: '树',
                        href: '#',
                        tags: ['0'],
                        nodes: [
                            {
                                text: '最小生成树',
                                href: "#",
                                tags: ['0']
                            },
                            {
                                text: '树的中心及直径',
                                href: '#',
                                tags: ['0']
                            },
                            {
                                text: 'dfs序',
                                href: '#',
                                tags: ['0']
                            },
                            {
                                text: '树链剖分与动态树',
                                href: "#",
                                tags: ['0']
                            },
                            {
                                text: 'LCA',
                                href: '#',
                                tags: ['0']
                            },
                            {
                                text: 'Prufer编码及Cayler定理',
                                href: '#',
                                tags: ['0']
                            },
                            {
                                text: '分治',
                                href: '#',
                                tags: ['0'],
                            }
                        ]
                    },
                    {
                        text: '图的联通',
                        href: '#',
                        tags: ['0'],
                        nodes: [
                            {
                                text: '强联通分量',
                                href: '#',
                                tags: ['0']
                            },
                            {
                                text: '双联通分量',
                                href: '#',
                                tags: ['0']
                            },
                            {
                                text: '割点和桥',
                                href: '#',
                                tags: ['0']
                            },
                            {
                                text: '2-SAT',
                                href: '#',
                                tags: ['0']
                            }
                        ]
                    },
                    {
                        text: '拓扑排序',
                        href: '#',
                        tags: ['0']
                    },
                    {
                        text: '欧拉图',
                        href: '#',
                        tags: ['0']
                    },
                    {
                        text: '网络',
                        href: '#',
                        tags: ['0'],
                        nodes: [
                            {
                                text: '网络流',
                                href: '#',
                                tags: ['0']
                            },
                            {
                                text: '二分图',
                                href: "#",
                                tags: ['0']
                            },
                            {
                                text: '方案唯一性',
                                href: "#",
                                tags: ['0']
                            }
                        ]
                    },
                    {
                        text: '最小平均值环',
                        href: "#",
                        tags: ['0']
                    }
                ]
            },
            {
                text: '动态规划',
                href: '#parent3',
                tags: ['0']
            },
            {
                text: '数学',
                href: '#parent4',
                tags: ['0']
            },
            {
                text: '博弈',
                href: '#parent5'  ,
                tags: ['0']
            },
            {
                text: '字符串',
                href: '#parent5'  ,
                tags: ['0']
            },
            {
                text: '计算几何',
                href: '#p7',
                tags: ['0']
            },
            {
                text: '数据结构',
                href: '#p8',
                tags: ['0']
            },
            {
                text: '技巧与思想',
                href: '#p9',
                tags: ['0']
            },
            {
                text: '其他',
                href: '#p10',
                tags: ['0']
            },
            {
                text: '搜索',
                href: '#p11',
                tags: ['0']
            }
        ];
        // 全局配置文件
        $('#treeview1').treeview({
            selectedColor: "green",
            levels: 1,
            data: defaultData,
            color: "#428bca",
        });

        // $('#treeview2').treeview({
        //     levels: 1,
        //     data: defaultData
        // });
        //
        // $('#treeview3').treeview({
        //     levels: 99,
        //     data: defaultData
        // });
    });