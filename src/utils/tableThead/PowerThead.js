/* 甲用电表头 */
export const ApowerThead = [
    {
        prop: 'date',
        label: '日期',
        width: '110',
        align: "center",
        fixed: true
    },
    {
        prop: '',
        label: '甲线',
        align: "center",
        children: [
            {
                label: '1-8栋宿舍',
                align: "center",
                children: [
                    {
                        label: 'TR3总表',
                        align: "center",
                        children: [
                            {
                                prop: 'name',
                                label: '1栋宿舍',
                                width: '80',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: '2栋宿舍',
                                width: '80',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: '3栋宿舍',
                                width: '80',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: '4栋宿舍',
                                width: '80',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: '1#冰机',
                                width: '70',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: '2#冰机',
                                width: '70',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: '水泵1',
                                width: '70',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: '水泵2',
                                width: '70',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: 'TR3总表合计',
                                width: '100',
                                align: "center",
                            }
                        ]
                    },
                    {
                        label: 'TR4总表',
                        align: "center",
                        children: [
                            {
                                prop: '',
                                label: '5栋宿舍',
                                width: '80',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: '6栋宿舍',
                                width: '80',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: '7栋宿舍',
                                width: '80',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: '8栋宿舍',
                                width: '80',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: '厨房1',
                                width: '60',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: '厨房2',
                                width: '60',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: '厨房3',
                                width: '60',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: '小吃街',
                                width: '60',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: 'TR4总表合计',
                                width: '100',
                                align: "center",
                            }
                        ]
                    },
                    {
                        prop: '',
                        label: '1-8栋宿舍总电',
                        width: '110',
                        align: "center",
                    }
                ]
            },
            {
                label: 'RDA+D5栋宿舍',
                align: "center",
                children: [
                    {
                        prop: '',
                        label: 'RDA辅房总表',
                        align: "center",
                        children: [
                            {
                                prop: '',
                                label: 'RDA辅房冰机',
                                width: '110',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: 'RDA辅房水泵',
                                width: '110',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: 'RDA辅房污水池',
                                width: '110',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: 'RDA辅房地下室',
                                width: '110',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: 'RDA辅房水表房',
                                width: '110',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: 'RDA辅房总表合计',
                                width: '120',
                                align: "center",
                            }
                        ]
                    },
                    {
                        prop: '',
                        label: 'D5栋宿舍',
                        width: '80',
                        align: "center",
                    },
                    {
                        prop: '',
                        label: 'RDA-1',
                        align: "center",
                        children: [
                            {
                                prop: '',
                                label: 'PSC产线',
                                width: '80',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: '4#污水池',
                                width: '80',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: 'RDA-1合计',
                                width: '90',
                                align: "center",
                            }
                        ]
                    },
                    {
                        prop: '',
                        label: 'RDA-2',
                        align: "center",
                        children: [
                            {
                                prop: '',
                                label: 'RDA宿舍1',
                                width: '80',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: 'RDA宿舍2',
                                width: '80',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: 'RDA-2合计',
                                width: '90',
                                align: "center",
                            }
                        ]
                    },
                    {
                        prop: '',
                        label: 'RDA+D5栋宿舍总电',
                        width: '130',
                        align: "center",
                    }
                ]
            },
            {
                prop: '',
                label: 'F0厂',
                width: '60',
                align: "center",
            },
            {
                prop: '',
                label: '备用',
                width: '60',
                align: "center",
            },
            {
                prop: '',
                label: '甲线总电',
                width: '80',
                align: "center",
            }
        ]
    }
]

/* 乙用电表头 */
export const BpowerThead = [
    {
        prop: 'date',
        label: '日期',
        width: '110',
        align: "center",
        fixed: true
    },
    {
        label: '乙线',
        align: "center",
        children: [
            {
                label: '9-14栋宿舍',
                align: "center",
                children: [
                    {
                        prop: '',
                        label: 'TR1总表',
                        align: "center",
                        children: [
                            {
                                prop: '',
                                label: '水泵1',
                                width: '70',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: '水泵2',
                                width: '70',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: '夜市',
                                width: '70',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: '水泵3',
                                width: '70',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: '1#冰机',
                                width: '70',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: '2#冰机',
                                width: '70',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: 'TR1总表合计',
                                width: '100',
                                align: "center",
                            }
                        ]
                    },
                    {
                        prop: '',
                        label: 'TR2总表',
                        align: "center",
                        children: [
                            {
                                prop: '',
                                label: '9栋宿舍',
                                width: '80',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: '10栋宿舍',
                                width: '80',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: '11栋宿舍',
                                width: '80',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: '12栋宿舍',
                                width: '80',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: '13栋宿舍',
                                width: '80',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: '14栋宿舍',
                                width: '80',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: '3#冰机',
                                width: '70',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: '水泵房',
                                width: '70',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: '5#污水池',
                                width: '80',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: 'TR2总表合计',
                                width: '100',
                                align: "center",
                            }
                        ]
                    },
                    {
                        prop: '',
                        label: '9-14栋宿舍总电',
                        width: '120',
                        align: "center",
                    }
                ]
            },
            {
                label: 'D1~D4栋宿舍',
                align: "center",
                children: [
                    {
                        prop: '',
                        label: 'TR9总表',
                        align: "center",
                        children: [
                            {
                                prop: '',
                                label: '生活水',
                                width: '70',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: '门房',
                                width: '60',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: 'TR9D23栋总电1',
                                width: '110',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: 'TR9D23栋总电2',
                                width: '110',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: 'TR9D24栋总电1',
                                width: '110',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: 'TR9D24栋总电2',
                                width: '120',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: 'TR9总表合计',
                                width: '120',
                                align: "center",
                            }
                        ]
                    },
                    {
                        prop: '',
                        label: 'TR10总表',
                        align: "center",
                        children: [
                            {
                                prop: '',
                                label: 'TR10D21栋总电1',
                                width: '120',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: 'TR10D22栋总电1',
                                width: '120',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: 'TR10D1~D2栋BF总电1',
                                width: '150',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: 'TR10总表合计',
                                width: '120',
                                align: "center",
                            }
                        ]
                    },
                    {
                        prop: '',
                        label: 'TR11总表',
                        align: "center",
                        children: [
                            {
                                prop: '',
                                label: 'TR11D1~D2栋BF总电2',
                                width: '150',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: 'TR11D2栋一层照明',
                                width: '140',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: 'TR11D21栋总电2',
                                width: '120',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: 'TR11D22栋总电2',
                                width: '120',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: 'D1餐厅',
                                width: '60',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: 'D2餐厅',
                                width: '60',
                                align: "center",
                            },
                            {
                                prop: '',
                                label: 'TR11总表合计',
                                width: '120',
                                align: "center",
                            }
                        ]
                    },
                    {
                        prop: '',
                        label: 'D1~D4栋宿舍总电',
                        width: '130',
                        align: "center",
                    }
                ]
            },
            {
                prop: '',
                label: '备用1',
                width: '60',
                align: "center",
            },
            {
                prop: '',
                label: '备用2',
                width: '60',
                align: "center",
            },
            {
                prop: '',
                label: '乙线总电',
                width: '80',
                align: "center",
            }
        ]
    }
]

/* 甲乙线用电总表 */
export const ABpowerThead = [
    {
        label: '甲线',
        align: "center",
        children: [
            {
                label: '1-8栋宿舍',
                align: "center",
                children: [
                    {
                        prop: '',
                        label: 'TR3总表',
                        width: '70',
                        align: "center",
                    },
                    {
                        prop: '',
                        label: 'TR4总表',
                        width: '70',
                        align: "center",
                    },
                    {
                        prop: '',
                        label: '1-8栋宿舍总电',
                        width: '110',
                        align: "center",
                    },
                ]
            },
            {
                label: 'RDA+D5栋宿舍',
                align: "center",
                children: [
                    {
                        prop: '',
                        label: 'RDA辅房总表',
                        width: '100',
                        align: "center",
                    },
                    {
                        prop: '',
                        label: 'D5栋宿舍',
                        width: '80',
                        align: "center",
                    },
                    {
                        prop: '',
                        label: 'RDA-1',
                        width: '60',
                        align: "center",
                    },
                    {
                        prop: '',
                        label: 'RDA-2',
                        width: '60',
                        align: "center",
                    },
                    {
                        prop: '',
                        label: 'RDA+D5栋宿舍总电',
                        width: '130',
                        align: "center",
                    },
                ]
            },
            {
                prop: '',
                label: 'F0厂',
                width: '60',
                align: "center",
            },
            {
                prop: '',
                label: '备用',
                width: '60',
                align: "center",
            },
            {
                prop: '',
                label: '甲线总用电',
                width: '90',
                align: "center",
            },
        ]
    },
    {
        label: '乙线',
        align: "center",
        children: [
            {
                label: '9-14栋宿舍',
                align: "center",
                children: [
                    {
                        prop: '',
                        label: 'TR1总表',
                        width: '70',
                        align: "center",
                    },
                    {
                        prop: '',
                        label: 'TR2总表',
                        width: '70',
                        align: "center",
                    },
                    {
                        prop: '',
                        label: '9-14栋宿舍合计',
                        width: '120',
                        align: "center",
                    },
                ]
            },
            {
                label: 'D1~D4栋宿舍',
                align: "center",
                children: [
                    {
                        prop: '',
                        label: 'TR9总表',
                        width: '80',
                        align: "center",
                    },
                    {
                        prop: '',
                        label: 'TR10总表',
                        width: '80',
                        align: "center",
                    },
                    {
                        prop: '',
                        label: 'TR11总表',
                        width: '80',
                        align: "center",
                    },
                    {
                        prop: '',
                        label: 'D1~D4栋宿舍',
                        width: '120',
                        align: "center",
                    },
                ]
            },
            {
                prop: '',
                label: '备用1',
                width: '60',
                align: "center",
            },
            {
                prop: '',
                label: '备用2',
                width: '60',
                align: "center",
            },
            {
                prop: '',
                label: '乙线总用电',
                // width: '90',
                align: "center",
            },
        ]
    }
]
