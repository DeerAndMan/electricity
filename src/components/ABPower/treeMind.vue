<template>
  <div id="containerWrapper">
    <div id="container" style="height: 45vh" />
    <div id="container1" style="height: 45vh" />
  </div>
</template>
/* 甲乙線線路圖 */
<script>
import G6 from "@antv/g6";
import insertCss from "insert-css";
insertCss(`
  .g6-component-tooltip {
    background-color: rgba(0,0,0, 0.65);
    padding: 10px;
    box-shadow: rgb(174, 174, 174) 0px 0px 10px;
    width: fit-content;
    color: #fff;
    z-index: 99 !important;
    border-radius: 4px
  }
`);

// 数据
const a_data = {
  id: "g1",
  name: "甲線",
  electronCurrent: "0000A",
  kilowattAmpere: "0000KWA",
  voltage: "0000KV",
  kiloVoltAmpere: "0000KVA",
  variableUp: false,
  children: [
    {
      id: "g12",
      name: "1~8棟宿舍",
      electronCurrent: "0000A",
      kilowattAmpere: "0000KWA",
      voltage: "0000KV",
      kiloVoltAmpere: "0000KVA",
      collapsed: true,
      variableUp: true,
      children: [
        {
          id: "g121",
          name: "TR3總表",
          electronCurrent: "0000A",
          kilowattAmpere: "0000KWA",
          voltage: "0000KV",
          kiloVoltAmpere: "0000KVA",
          collapsed: true,
          variableUp: true,
          children: [
            {
              id: "g1211",
              name: "1棟宿舍",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "g1212",
              name: "2棟宿舍",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "g1213",
              name: "3棟宿舍",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "g1214",
              name: "4棟宿舍",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "g1215",
              name: "1#冰機",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "g1216",
              name: "2#冰機",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "g1217",
              name: "水泵1",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "g1218",
              name: "水泵1",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
          ],
        },
        {
          id: "g122",
          name: "TR4總表",
          electronCurrent: "0000A",
          kilowattAmpere: "0000KWA",
          voltage: "0000KV",
          kiloVoltAmpere: "0000KVA",
          collapsed: true,
          variableUp: true,
          children: [
            {
              id: "g1221",
              name: "5棟宿舍",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "g1222",
              name: "6棟宿舍",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "g1223",
              name: "7棟宿舍",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "g1224",
              name: "8棟宿舍",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "g1225",
              name: "廚房1",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "g1226",
              name: "廚房2",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "g1227",
              name: "廚房3",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "g1228",
              name: "小吃街",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: "g13",
      name: "RDA+D5棟宿舍",
      electronCurrent: "0000A",
      kilowattAmpere: "0000KWA",
      voltage: "0000KV",
      kiloVoltAmpere: "0000KVA",
      collapsed: true,
      variableUp: true,
      children: [
        {
          id: "g131",
          name: "RDA輔房總表",
          electronCurrent: "0000A",
          kilowattAmpere: "0000KWA",
          voltage: "0000KV",
          kiloVoltAmpere: "0000KVA",
          collapsed: true,
          variableUp: true,
          children: [
            {
              id: "g1311",
              name: "冰機",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: true,
              children: [],
            },
            {
              id: "g1312",
              name: "水泵",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: true,
              children: [],
            },
            {
              id: "g1313",
              name: "污水池",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: true,
              children: [],
            },
            {
              id: "g1314",
              name: "地下室",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: true,
              children: [],
            },
            {
              id: "g1315",
              name: "水錶房",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: true,
              children: [],
            },
          ],
        },
        {
          id: "g132",
          name: "D5棟宿",
          electronCurrent: "0000A",
          kilowattAmpere: "0000KWA",
          voltage: "0000KV",
          kiloVoltAmpere: "0000KVA",
          variableUp: false,
          children: [],
        },
        {
          id: "g133",
          name: "RDA-1",
          electronCurrent: "0000A",
          kilowattAmpere: "0000KWA",
          voltage: "0000KV",
          kiloVoltAmpere: "0000KVA",
          collapsed: true,
          variableUp: false,
          children: [
            {
              id: "g1321",
              name: "PSC產線",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "g1322",
              name: "4#污水池",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
          ],
        },
        {
          id: "g134",
          name: "RDA-2",
          electronCurrent: "0000A",
          kilowattAmpere: "0000KWA",
          voltage: "0000KV",
          kiloVoltAmpere: "0000KVA",
          collapsed: true,
          variableUp: false,
          children: [
            {
              id: "g1341",
              name: "RDA宿舍1",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "g1342",
              name: "RDA宿舍2",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: "g14",
      name: "F0廠",
      electronCurrent: "0000A",
      kilowattAmpere: "0000KWA",
      voltage: "0000KV",
      kiloVoltAmpere: "0000KVA",
      collapsed: true,
      variableUp: true,
      children: [],
    },
    {
      id: "g15",
      name: "備用",
      electronCurrent: "0000A",
      kilowattAmpere: "0000KWA",
      voltage: "0000KV",
      kiloVoltAmpere: "0000KVA",
      collapsed: true,
      variableUp: true,
      children: [],
    },
  ],
};

//  组件props
const a_props = {
  data: a_data,
  config: {
    padding: [20, 50],
    defaultLevel: 3,
    // defaultZoom: 0.8,
    modes: { default: ["zoom-canvas", "drag-canvas"] },
  },
};

const b_data = {
  id: "m1",
  name: "乙線",
  electronCurrent: "0000A",
  kilowattAmpere: "0000KWA",
  voltage: "0000KV",
  kiloVoltAmpere: "0000KVA",
  variableUp: false,
  children: [
    {
      id: "m12",
      name: "9~14棟宿舍",
      electronCurrent: "0000A",
      kilowattAmpere: "0000KWA",
      voltage: "0000KV",
      kiloVoltAmpere: "0000KVA",
      collapsed: true,
      variableUp: true,
      children: [
        {
          id: "m121",
          name: "TR1總表",
          electronCurrent: "0000A",
          kilowattAmpere: "0000KWA",
          voltage: "0000KV",
          kiloVoltAmpere: "0000KVA",
          collapsed: true,
          variableUp: true,
          children: [
            {
              id: "m1211",
              name: "水泵1",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "m1212",
              name: "水泵2",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "m1213",
              name: "夜市",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "m1214",
              name: "水泵3",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "m1215",
              name: "1#冰機",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "m1216",
              name: "2#冰機",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
          ],
        },
        {
          id: "m122",
          name: "TR2總表",
          electronCurrent: "0000A",
          kilowattAmpere: "0000KWA",
          voltage: "0000KV",
          kiloVoltAmpere: "0000KVA",
          collapsed: true,
          variableUp: true,
          children: [
            {
              id: "m1221",
              name: "9棟宿舍",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "m1222",
              name: "10棟宿舍",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "m1223",
              name: "11棟宿舍",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "m1224",
              name: "12棟宿舍",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "m1225",
              name: "13棟宿舍",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "m1226",
              name: "14棟宿舍",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "m1227",
              name: "3#冰機",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "m1228",
              name: "水泵房",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "m1229",
              name: "5#污水池",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: "m13",
      name: "D1~D4棟宿舍",
      electronCurrent: "0000A",
      kilowattAmpere: "0000KWA",
      voltage: "0000KV",
      kiloVoltAmpere: "0000KVA",
      collapsed: true,
      variableUp: true,
      children: [
        {
          id: "m131",
          name: "TR9總表",
          electronCurrent: "0000A",
          kilowattAmpere: "0000KWA",
          voltage: "0000KV",
          kiloVoltAmpere: "0000KVA",
          collapsed: true,
          variableUp: true,
          children: [
            {
              id: "m1311",
              name: "生活水",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: true,
              children: [],
            },
            {
              id: "m1312",
              name: "门房",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: true,
              children: [],
            },
            {
              id: "m1313",
              name: "D23棟總電1",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: true,
              children: [],
            },
            {
              id: "m1314",
              name: "D23棟總電2",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: true,
              children: [],
            },
            {
              id: "m1315",
              name: "D24棟總電1",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: true,
              children: [],
            },
            {
              id: "m1316",
              name: "D24棟總電2",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: true,
              children: [],
            },
          ],
        },
        {
          id: "g132",
          name: "TR10總表",
          electronCurrent: "0000A",
          kilowattAmpere: "0000KWA",
          voltage: "0000KV",
          kiloVoltAmpere: "0000KVA",
          variableUp: false,
          children: [
            {
              id: "m1321",
              name: "D21棟總電1",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "m1322",
              name: "D21棟總電2",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "m1323",
              name: "D1~D2棟BF總電1",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
          ],
        },
        {
          id: "m133",
          name: "TR11總表",
          electronCurrent: "0000A",
          kilowattAmpere: "0000KWA",
          voltage: "0000KV",
          kiloVoltAmpere: "0000KVA",
          collapsed: true,
          variableUp: false,
          children: [
            {
              id: "m1331",
              name: "D1~D2棟BF總電2",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "m1332",
              name: "D2棟一層照明",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "m1333",
              name: "D21棟總電2",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "m1334",
              name: "D21棟總電2",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "m1335",
              name: "D1餐廳",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
            {
              id: "m1336",
              name: "D1餐廳",
              electronCurrent: "0000A",
              kilowattAmpere: "0000KWA",
              voltage: "0000KV",
              kiloVoltAmpere: "0000KVA",
              variableUp: false,
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: "m14",
      name: "備用1",
      electronCurrent: "0000A",
      kilowattAmpere: "0000KWA",
      voltage: "0000KV",
      kiloVoltAmpere: "0000KVA",
      collapsed: true,
      variableUp: true,
      children: [],
    },
    {
      id: "m15",
      name: "備用2",
      electronCurrent: "0000A",
      kilowattAmpere: "0000KWA",
      voltage: "0000KV",
      kiloVoltAmpere: "0000KVA",
      collapsed: true,
      variableUp: true,
      children: [],
    },
  ],
};
const b_props = {
  data: b_data,
  config: {
    padding: [20, 50],
    defaultLevel: 3,
    // defaultZoom: 0.8,
    modes: { default: ["zoom-canvas", "drag-canvas"] },
  },
};

export default {
  data() {
    return {};
  },
  methods: {
    treeMind(props, idName) {
      const container = document.getElementById(idName);
      const width = container.offsetWidth;
      const height = container.offsetHeight || 480;
      // 默认配置
      const defaultConfig = {
        width,
        height,
        modes: {
          default: ["drag-canvas", "zoom-canvas"],
        },
        fitView: true,
        animate: true,
        defaultNode: {
          type: "flow-rect",
        },
        defaultEdge: {
          type: "cubic-vertical",
          style: {
            stroke: "#2a5caa",
          },
        },
        layout: {
          type: "compactBox",
          direction: "TB",
          getId: function getId(d) {
            return d.id;
          },
          getHeight: function getHeight() {
            return 20;
          },
          getWidth: function getWidth() {
            return 200;
          },
          getVGap: function getVGap() {
            return 80;
          },
          getHGap: function getHGap() {
            return 20;
          },
          dropCap: false,
        },
      };

      const registerFn = () => {
        /**
         * 自定义节点
         */
        G6.registerNode(
          "flow-rect",
          {
            shapeType: "flow-rect",
            draw(cfg, group) {
              const {
                name = "",
                electronCurrent,
                kilowattAmpere,
                voltage,
                kiloVoltAmpere,
                collapsed,
              } = cfg;
              const grey = "#2a5caa";
              // 逻辑不应该在这里判断
              const rectConfig = {
                width: 205,
                height: 65,
                lineWidth: 1,
                fontSize: 12,
                fill: "#fff",
                radius: 4,
                stroke: grey,
                opacity: 1,
              };

              const nodeOrigin = {
                x: -rectConfig.width / 2,
                y: -rectConfig.height / 2,
              };

              const textConfig = {
                textAlign: "left",
                textBaseline: "bottom",
              };

              const rect = group.addShape("rect", {
                attrs: {
                  x: nodeOrigin.x,
                  y: nodeOrigin.y,
                  ...rectConfig,
                },
              });

              // 標題
              group.addShape("text", {
                attrs: {
                  ...textConfig,
                  x: 10 + nodeOrigin.x,
                  y: 20 + nodeOrigin.y,
                  text: name.length > 8 ? name.substr(0, 8) + "..." : name,
                  fontSize: 16,
                  opacity: 0.85,
                  fill: "#000",
                  cursor: "pointer",
                },
                name: "name-shape",
              });
              // electronCurrent(A)
              const electron = group.addShape("text", {
                attrs: {
                  ...textConfig,
                  x: nodeOrigin.x + 125,
                  y: 18 + nodeOrigin.y,
                  text: electronCurrent,
                  fontSize: 12,
                  fill: "#7fb80e",
                  opacity: 0.85,
                },
              });

              // kilowattAmpere(KWA)
              const kwa = group.addShape("text", {
                attrs: {
                  ...textConfig,
                  x: nodeOrigin.x + 125,
                  y: electron.getBBox().maxY + 15,
                  text: kilowattAmpere,
                  fontSize: 12,
                  fill: "#7fb80e",
                  opacity: 0.85,
                },
              });

              // voltage(KV)
              const kv = group.addShape("text", {
                attrs: {
                  ...textConfig,
                  x: nodeOrigin.x + 125,
                  y: kwa.getBBox().maxY + 15,
                  text: voltage,
                  fontSize: 12,
                  fill: "#7fb80e",
                  opacity: 0.85,
                },
              });

              // kiloVoltAmpere(KVA)
              group.addShape("text", {
                attrs: {
                  ...textConfig,
                  x: nodeOrigin.x + 125,
                  y: kv.getBBox().maxY + 15,
                  text: kiloVoltAmpere,
                  fontSize: 12,
                  fill: "#7fb80e",
                  opacity: 0.85,
                },
              });

              // collapse rect
              if (cfg.children && cfg.children.length) {
                group.addShape("rect", {
                  attrs: {
                    x: -8,
                    y: rectConfig.height / 2 - 8,
                    width: 16,
                    height: 16,
                    stroke: "rgba(0, 0, 0, 0.25)",
                    cursor: "pointer",
                    fill: "#fff",
                  },
                  name: "collapse-back",
                  modelId: cfg.id,
                });

                // collpase text
                group.addShape("text", {
                  attrs: {
                    x: 0,
                    y: rectConfig.height / 2 + 1,
                    textAlign: "center",
                    textBaseline: "middle",
                    text: collapsed ? "+" : "-",
                    fontSize: 16,
                    cursor: "pointer",
                    fill: "rgba(0, 0, 0, 0.25)",
                  },
                  name: "collapse-text",
                  modelId: cfg.id,
                });
              }

              this.drawLinkPoints(cfg, group);
              return rect;
            },
            update(cfg, item) {
              const group = item.getContainer();
              this.updateLinkPoints(cfg, group);
            },
            setState(name, value, item) {
              if (name === "collapse") {
                const group = item.getContainer();
                const collapseText = group.find(
                  (e) => e.get("name") === "collapse-text"
                );
                if (collapseText) {
                  if (!value) {
                    collapseText.attr({
                      text: "-",
                    });
                  } else {
                    collapseText.attr({
                      text: "+",
                    });
                  }
                }
              }
            },
            getAnchorPoints() {
              return [
                [0, 0.5],
                [0.5, 1],
              ];
            },
          },
          "rect"
        ); /*  */
        G6.registerEdge(
          "flow-cubic",
          {
            getControlPoints(cfg) {
              let controlPoints = cfg.controlPoints; // 指定controlPoints
              if (!controlPoints || !controlPoints.length) {
                const { startPoint, endPoint, sourceNode, targetNode } = cfg;
                const {
                  x: startX,
                  y: startY,
                  coefficientX,
                  coefficientY,
                } = sourceNode ? sourceNode.getModel() : startPoint;
                const { x: endX, y: endY } = targetNode
                  ? targetNode.getModel()
                  : endPoint;
                let curveStart = (endX - startX) * coefficientX;
                let curveEnd = (endY - startY) * coefficientY;
                curveStart = curveStart > 40 ? 40 : curveStart;
                curveEnd = curveEnd < -30 ? curveEnd : -30;
                controlPoints = [
                  { x: startPoint.x + curveStart, y: startPoint.y },
                  { x: endPoint.x + curveEnd, y: endPoint.y },
                ];
              }
              return controlPoints;
            },
            getPath(points) {
              const path = [];
              path.push(["M", points[0].x, points[0].y]);
              path.push([
                "C",
                points[1].x,
                points[1].y,
                points[2].x,
                points[2].y,
                points[3].x,
                points[3].y,
              ]);
              return path;
            },
          },
          "single-line"
        );
      };

      registerFn();

      const { data } = props;
      let graph = null;

      const initGraph = (data) => {
        if (!data) {
          return;
        }
        const { onInit, config } = props;
        const tooltip = new G6.Tooltip({
          fitView: true,
          // offsetX and offsetY include the padding of the parent container
          offsetX: 20,
          offsetY: 30,
          // the types of items that allow the tooltip show up
          // 允许出现 tooltip 的 item 类型
          itemTypes: ["node"],
          // custom the tooltip's content
          // 自定义 tooltip 内容
          getContent: (e) => {
            const outDiv = document.createElement("div");
            //outDiv.style.padding = '0px 0px 20px 0px';
            const nodeName = e.item.getModel().name;
            let formatedNodeName = "";
            for (let i = 0; i < nodeName.length; i++) {
              formatedNodeName = `${formatedNodeName}${nodeName[i]}`;
              if (i !== 0 && i % 20 === 0)
                formatedNodeName = `${formatedNodeName}<br/>`;
            }
            outDiv.innerHTML = `${formatedNodeName}`;
            return outDiv;
          },
          shouldBegin: (e) => {
            if (e.target.get("name") === "name-shape") return true;
            return false;
          },
        });
        graph = new G6.TreeGraph({
          container: idName,
          ...defaultConfig,
          ...config,
          plugins: [tooltip],
        });
        if (typeof onInit === "function") {
          onInit(graph);
        }
        graph.data(data);
        graph.render();
        graph.zoom(config.defaultZoom || 1);

        const handleCollapse = (e) => {
          const target = e.target;
          const id = target.get("modelId");
          const item = graph.findById(id);
          const nodeModel = item.getModel();
          nodeModel.collapsed = !nodeModel.collapsed;
          graph.layout();
          graph.setItemState(item, "collapse", nodeModel.collapsed);
        };
        graph.on("collapse-text:click", (e) => {
          handleCollapse(e);
        });
        graph.on("collapse-back:click", (e) => {
          handleCollapse(e);
        });
      };

      initGraph(data);
      if (typeof window !== "undefined")
        window.onresize = () => {
          if (!graph || graph.get("destroyed")) return;
          if (!container || !container.scrollWidth || !container.scrollHeight)
            return;
          graph.changeSize(container.scrollWidth, container.scrollHeight);
        };
    },
  },
  mounted() {
    this.treeMind(a_props, "container");
    this.treeMind(b_props, "container1");
  },
};
</script>
<style scoped>
#containerWrapper{
  padding: 0;
  margin: 0;
}
#container,
#container1 {
  margin-top: 16px;
  width: 100%;
  border: 2px solid #bae7ff;
  box-sizing: border-box;
  border-image: linear-gradient(#48cfad, #fafaf5, #c2a8ff )1 10 1; /* 标准的必须写在最后 */
  border-radius: 10px;
}
#container {
  margin-top: 0;
}
</style>