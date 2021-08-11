import FileSaver from 'file-saver';
import ExcelJS from 'exceljs';

export const ExcelHistory = async(title=[], data=[], excelName='导出数据') => {
    const Workbook = new ExcelJS.Workbook();
    const Sheet1 = Workbook.addWorksheet('Sheet1');

    // 表头
    const Thead = []
    for (const item of title) {
        Thead.push({
            header: item['name'],
            key: item['key'],
            width: item['width'] || 15,
            style: { // 样式
                alignment: {
                    vertical: 'middle', 
                    horizontal: 'center'
                },
            },
            
        })
    }

    Sheet1.columns = Thead
    // 动态数据，添加行数据
    Sheet1.addRows(data);

    const buffer = await Workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
        type: "application/octet-stream; charset=utf-8"
    });
    FileSaver.saveAs(blob, excelName+".xlsx");
    return false
}
