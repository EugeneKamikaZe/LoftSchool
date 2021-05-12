/*
 Задание 1:

 1.1: Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
   - fn не является функцией (с текстом "fn is not a function")

 Зарпещено использовать встроенные методы для работы с массивами

 Пример:
   isAllTrue([1, 2, 3, 4, 5], n => n < 10) // вернет true
   isAllTrue([100, 2, 3, 4, 5], n => n < 10) // вернет false
 */
function isAllTrue(array, fn) {
    if (array instanceof Array == false || array.length == 0) {
        throw new Error('empty array');
    }

    if (typeof fn != 'function') {
        throw new Error('fn is not a function');
    }

    for (let i=0; i<array.length; i++) {
        if (!fn(array[i])) {
            return false;
        }
    }

    return true;
/*
 1.1: Функция должна создать элемент с тегом DIV

 1.2: В созданный элемент необходимо поместить текст, переданный в параметр text

 Пример:
   createDivWithText('loftschool') // создаст элемент div, поместит в него 'loftschool' и вернет созданный элемент
 */
function createDivWithText(text) {
    let element = document.createElement('div');

    element.innerText = text;

    return element;
}

/*
 Задание 2:


 2.1: Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true если fn вернула true хотя бы
 для одного из элементов массива

 2.2: Необходимо выбрасывать исключение в случаях:
   - array не массив или пустой массив (с текстом "empty array")
   - fn не является функцией (с текстом "fn is not a function")

 Зарпещено использовать встроенные методы для работы с массивами

 Пример:
   isSomeTrue([1, 2, 30, 4, 5], n => n > 20) // вернет true
   isSomeTrue([1, 2, 3, 4, 5], n => n > 20) // вернет false
 */
function isSomeTrue(array, fn) {
    if (array instanceof Array == false || array.length == 0) {
        throw new Error('empty array');
    }

    if (typeof fn != 'function') {
        throw new Error('fn is not a function');
    }
    for (let i=0; i<array.length; i++) {
        if (fn(array[i])) {
            return true;
        }
    }

    return false;
/*
 Функция должна вставлять элемент, переданный в параметре what
 в начало элемента, переданного в параметре where

 Пример:
   prepend(document.querySelector('#one'), document.querySelector('#two')) // добавит элемент переданный первым аргументом в начало элемента переданного вторым аргументом
 */
function prepend(what, where) {

    where.prepend(what);

}

/*
 Задание 3:


 3.1: Функция принимает заранее неизветсное количество аргументов, первым из которых является функция fn
 Функция должна поочередно запустить fn для каждого переданного аргумента (кроме самой fn)

 3.2: Функция должна вернуть массив аргументов, для которых fn выбросила исключение

 3.3: Необходимо выбрасывать исключение в случаях:
   - fn не является функцией (с текстом "fn is not a function")
 */
function returnBadArguments(fn) {
    var array = [];

    if (typeof fn != 'function') {
        throw new Error('fn is not a function');
    }

    for (let i = 1; i < arguments.length; i++) {
        try {
            fn(arguments[i]);
        } catch (e) {
            array.push(arguments[i]);
/*
 3.1: Функция должна перебрать все дочерние элементы узла,
 переданного в параметре where

 3.2: Функция должна вернуть массив, состоящий из тех
 дочерних элементов, следующим соседом которых является элемент с тегом P

 Пример:
   Представим, что есть разметка:
   <body>
      <div></div>
      <p></p>
      <a></a>
      <span></span>
      <p></p>
   </dody>

   findAllPSiblings(document.body) // функция должна вернуть массив
   с элементами div и span т.к. следующим соседом этих элементов
   является элемент с тегом P
 */
function findAllPSiblings(where) {
    let array = [],
        element = where.children;

    for (let i=0; i<element.length - 1; i++) {
        if (element[i].nextElementSibling.nodeName == 'P') {
            array.push(element[i]);

        }
    }

    return array;
}

/*
 Задание 4:

 4.1: Функция имеет параметр number (по умолчанию - 0)

 4.2: Функция должна вернуть объект, у которого должно быть несколько методов:
   - sum - складывает number с переданными аргументами
   - dif - вычитает из number переданные аргументы
   - div - делит number на первый аргумент. Результат делится
   на следующий аргумент (если передан) и так далее
   - mul - умножает number на первый аргумент. Результат умножается
   на следующий аргумент (если передан) и так далее

 Количество передаваемых в методы аргументов заранее неизвестно

 4.3: Необходимо выбрасывать исключение в случаях:
   - number не является числом (с текстом "number is not a number")
   - какой-либо из аргументов div является нулем (с текстом "division by 0")
 */
function calculator(number = 0) {
    if (typeof number != 'number' ) {
        throw new Error('number is not a number');
    }

    var obj = {
        sum: function () {
            for (let i = 0; i<arguments.length; i++) {
                number += arguments[i];
            }

            return number;
        },
        dif: function () {
            for (let i = 0; i<arguments.length; i++) {
                number -= arguments[i];
            }

            return number;
        },
        div: function () {
            for (let i = 0; i<arguments.length; i++) {
                if (arguments[i] == 0) {
                    throw new Error('division by 0');
                }

                number /= arguments[i];
            }

            return number;
        },
        mul: function () {
            for (let i = 0; i<arguments.length; i++) {
                number *= arguments[i];
            }

            return number;
        }
    }

    return obj;
/*
 Функция представленная ниже, перебирает все дочерние узлы типа
 "элемент" внутри узла переданного в параметре where и возвращает массив
 из текстового содержимого найденных элементов.
 Но похоже, что в код функции закралась ошибка и она работает не так, как описано.

 Необходимо найти и исправить ошибку в коде так, чтобы функция работала
 так, как описано выше.

 Пример:
   Представим, что есть разметка:
   <body>
      <div>привет</div>
      <div>loftschool</div>
   </dody>

   findError(document.body) // функция должна вернуть массив с
   элементами 'привет' и 'loftschool'
 */
function findError(where) {
    var result = [];

    for (var i = 0; i < where.childNodes.length; i++) {
        if (where.childNodes[i].nodeType == 1) {
            result.push(where.childNodes[i].innerText);
        }
    }

    return result;
}

/*
 Задание 5:

 Функция должна перебрать все дочерние узлы элемента переданного
 в параметре where и удалить из него все текстовые узлы

 Задачу необходимо решить без использования рекурсии, то есть
 можно не уходить вглубь дерева.
 Так же будьте внимательны при удалении узлов, т.к. можно получить
 неожиданное поведение при переборе узлов

 Пример:
   После выполнения функции, дерево <div></div>привет<p></p>loftchool!!!
   должно быть преобразовано в <div></div><p></p>
 */
function deleteTextNodes(where) {
    let element = where.childNodes;

    for (let i = 0; i<element.length; i++) {
        if (element[i].nodeType == 3) {
            element[i].parentNode.removeChild(element[i]);
        }
    }

    return element;
}

/*
 Задание 6:

 Выполнить предудыщее задание с использование рекурсии - то
 есть необходимо заходить внутрь каждого дочернего элемента (углубляться в дерево)

 Так же будьте внимательны при удалении узлов, т.к.
 можно получить неожиданное поведение при переборе узлов

 Пример:
   После выполнения функции, дерево <span> <div> <b>привет</b>
   </div> <p>loftchool</p> !!!</span>
   должно быть преобразовано в <span><div><b></b></div><p></p></span>
 */
function deleteTextNodesRecursive(where) {
    let element = where.childNodes;

    for (let i = 0; i<element.length; i++) {
        let child = element[i];

        if (child.nodeType == 3) {
            where.removeChild(child);
            i--;
        }
        if (child.nodeType == 1) {
            deleteTextNodesRecursive(child);
        }
    if (to < 0) {
        to = array.length - Math.abs(to)
    } else if (to > array.length) {
        to = array.length;
    }
    
    for (let i = from; i<to; i++) {
        items.push(array[i]);

    }
    return element;
}

/*
 Задание 7 *:

 Необходимо собрать статистику по всем узлам внутри элемента
 переданного в параметре root и вернуть ее в виде объекта
 Статистика должна содержать:
 - количество текстовых узлов
 - количество элементов каждого класса
 - количество элементов каждого тега
 Для работы с классами рекомендуется использовать classList
 Постарайтесь не создавать глобальных переменных

 Пример:
   Для дерева <div class="some-class-1"><b>привет!</b>
   <b class="some-class-1 some-class-2">loftschool</b></div>
   должен быть возвращен такой объект:
   {
     tags: { DIV: 1, B: 2},
     classes: { "some-class-1": 2, "some-class-2": 1 },
     texts: 3
   }
 */
function collectDOMStat(root) {
    let obj = {
        tags: {},
        classes: {},
        texts: 0
    };

    function per(root) {
        for (let key of root.childNodes) {
            if (key.nodeType == 3) {
                obj.texts++;
            }
      /*    
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и
 возводить это значение в квадрат
 */
function createProxy(obj) {
    return new Proxy(obj, {
        set(obj, key, value) {
            obj[key] = value ** 2;

            if (key.nodeType == 1) {
                if (key.tagName in obj.tags) {
                    obj.tags[key.tagName]++;
                } else {
                    obj.tags[key.tagName] = 1;
                }

                for (let className of key.classList) {
                    if (className in obj.classes ) {
                        obj.classes[className]++;
                    } else {
                        obj.classes[className] = 1;
                    }
                }
            }

            per(key);
        }
    }
    per(root);

    return obj;
}

/*
 Задание 8 *:

 8.1: Функция должна отслеживать добавление и удаление элементов внутри
 элемента переданного в параметре where
 Как только в where добавляются или удаляются элементы,
 необходимо сообщать об этом при помощи вызова функции переданной в параметре fn

 8.2: При вызове fn необходимо передавать ей в качестве аргумента объект с
 двумя свойствами:
   - type: типа события (insert или remove)
   - nodes: массив из удаленных или добавленных элементов (в зависимости от события)

 8.3: Отслеживание должно работать вне зависимости от глубины создаваемых/
 удаляемых элементов

 Рекомендуется использовать MutationObserver

 Пример:
   Если в where или в одного из его детей добавляется элемент div
   то fn должна быть вызвана с аргументом:
   {
     type: 'insert',
     nodes: [div]
   }

   ------

   Если из where или из одного из его детей удаляется элемент div
   то fn должна быть вызвана с аргументом:
   {
     type: 'remove',
     nodes: [div]
   }
 */
function observeChildNodes(where, fn) {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type == 'childList') {
                fn({
                    type: mutation.addedNodes.length ? 'insert' : 'remove',
                    nodes: [...(mutation.addedNodes.length ? mutation.addedNodes : mutation.removedNodes)]
                });
            }
        });
    });


    observer.observe(where, { childList: true, subtree: true });

}

/* При решении задач, пострайтесь использовать отладчик */

export {
    isAllTrue,
    isSomeTrue,
    returnBadArguments,
    calculator
    createDivWithText,
    prepend,
    findAllPSiblings,
    findError,
    deleteTextNodes,
    deleteTextNodesRecursive,
    collectDOMStat,
    observeChildNodes
};
