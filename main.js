(function() {
    const observeConfig = {
        childList: true,
        subtree: true
    };
    
    function handlePaste(e) {
        let clipboardData = e.clipboardData || window.clipboardData;
        let items = clipboardData.items;
        
        for(let i=0; i < items.length; ++i){
            let item = items[i];
            if(item.kind === 'file' && item.type.startsWith('image/')) {
                var blob = item.getAsFile();
                var reader = new FileReader();
                reader.onload = function(event) {
                    let imageURL = event.target.result;
                    
                    // Формируем новую строку с ссылкой на изображение
                    let linkText = '<a href="' + imageURL + '" target="_blank">Изображение здесь</a>';
                    
                    document.execCommand('insertHTML', false, linkText);
                };
                reader.readAsDataURL(blob); // Читаем файл как DataURL
                
                e.preventDefault(); // Отменяем стандартное поведение вставки
            }
        }
    }

    // Ищем элемент формы ввода комментария
    const textareaSelector = '.js-textarea'; // Измените селектор, если он отличается!
    const textareaElement = document.querySelector(textareaSelector);

    if (!textareaElement) {
        console.warn('Элемент поля комментария не найден!');
        return;
    }

    // Устанавливаем обработчик paste на форму
    textareaElement.addEventListener('paste', handlePaste);
})();
