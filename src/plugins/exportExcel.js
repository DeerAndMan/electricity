// 保存文件
import FileSaver from 'file-saver';
import ExcelJS from 'exceljs';

const ExportExcel = async () => {
    // 创建工作簿
    const Workbook = new ExcelJS.Workbook();
    const Sheet1 = Workbook.addWorksheet('Sheet1');


    const Sheet2_data = [{
        sex: '女',
        sexVal: '0',
    }, {
        sex: '男',
        sexVal: '1',
    }];

    for (let i = 0; i < 30; i++) {
        Sheet2_data.push({
            sex: i + '男',
            sexVal: i+2,
        })
    }


    Sheet1.columns = [{
            header: '编号',
            key: 'no',
            width: 20
        }, // A1
        {
            header: '姓名',
            key: 'name',
            width: 20
        }, // B2
        {
            header: '性别',
            key: 'sex',
            width: 20
        }, // C3
        {
            header: '性别值',
            key: 'sexVal',
            width: 20
        }, // D4
    ];

    const Sheet1_data = [{
        no: '1',
        name: '小红',
        sex: '女',
        sexVal: '0',
    }]

    // 动态数据，添加行数据
    Sheet1.addRows(Sheet1_data);
    // 渲染下拉框
    new Array(1000).fill(0).forEach((_, idx) => {
        const row = idx + 2;
        // 渲染部门下拉框
        Sheet1.getCell(row, 3).dataValidation = {
            type: 'list',
            formulae: [`=Sheet2!$A$2:$A${Sheet2_data.length+1}`]
        };
        // 使用indirect函数添加引用, 渲染性别值
        Sheet1.getCell(row, 4).dataValidation = {
            type: 'list',
            formulae: [`=INDIRECT(C${row})`]
        };
    });

    // await Workbook.xlsx.writeFile('C:/Users/Administrator/Desktop/dd/模板列表.xlsx');
    // await Workbook.xlsx.writeFile('./dd.xlsx');
    const buffer = await Workbook.xlsx.writeBuffer();

    const blob = new Blob([buffer], {
        type: "application/octet-stream; charset=utf-8"
    });


    // 使用FileSave 保存文件
    FileSaver.saveAs(blob, "hello world.xlsx");

    return false;
}

export default ExportExcel
