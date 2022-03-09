// 1) Установить локально пакет fs-extra
// 2) Создать папку
// 3) Создать текстовый файл
// 4) создать вторую папку
// 5) переместить файл из первой папки во вторую
// 6) Удалить файл
// 7) удалить папки
// Использовать пакет fs-extra с синхронизацией через callback

const fs = require ('fs-extra');

fs.emptyDir('./firstDirectory', () => {
    console.log('Create first directory');
    fs.ensureFile('./firstDirectory/text.txt', () => {
        console.log('Create file .txt');
        fs.emptyDir('./secondDirectory', () => {
            console.log('Create second directory');
            fs.move('./firstDirectory/text.txt', './secondDirectory/text.txt', () => {
                console.log('File moved');
                fs.remove('./secondDirectory/text.txt', () => {
                    console.log('File deleted')
                    fs.remove('./firstDirectory', () => {
                        console.log('The first directory has been deleted');
                        fs.remove('./secondDirectory', () => {
                            console.log('The second directory has been deleted');
                        })
                    })
                })
            })
        })
    })
})

