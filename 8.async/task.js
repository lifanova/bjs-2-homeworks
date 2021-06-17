class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    /**
     * Добавление нового звонка в коллекцию существующих
     */
    addClock(time, callback, id) {
        if (id == undefined) {
            throw new Error("[addClock]: Ошибка: id не определен!");
        }

        if (this.alarmCollection.findIndex(item => item.id === id) != -1) {
            console.error("[addClock]: Звонок с id = " + id + "уже существует");
            return;
        }

        this.alarmCollection.push({ id, time, callback });
    }

    /**
     * Удаление определённого звонка
     */
    removeClock(id) {
        let idx = this.alarmCollection.findIndex(item => item.id === id);
        if (idx == -1) {
            console.error("[removeClock]: Звонок с id = " + id + "не существует");
            return false;
        }

        let deleted = this.alarmCollection.splice(idx);
        return (deleted != null);
    }

    /**
     * Текущее время в строковом формате HH:MM
     */
    getCurrentFormattedTime() {
        return this.getFormattedTime(new Date());
    }

    getFormattedTime(param) {
        let date = new Date(param);
        //hh:mm:ss
        let result = date.toTimeString();

        return result.substring(0, 5);
    }

    /**
     * Запуск всех звонков 
     */
    start() {
        let self = this;
        function checkClock(alarm) {
            // { id, time, callback }
            // строка в формате hh:mm; если время совпало с текущим, то вызываем callback
            if (alarm.time === self.getCurrentFormattedTime()) {
                alarm.callback();
            }
        }

        if (this.timerId != null) {
            console.log("[start]: ID = " + this.timerId);
            return;
        }

        this.timerId = setInterval(() => {
            //console.log("[setInterval] " + this.alarmCollection.length);
            this.alarmCollection.forEach(item => checkClock(item));
        }, 2000);

    }

    /**
     * Прекращение выполнения всех звонков
     */
    stop() {
        if (this.timerId != null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    /**
     * Печать всех звонков
     */
    printAlarms() {
        console.log("Печать всех будильников в количестве: " + this.alarmCollection.length);
        this.alarmCollection.forEach(item => console.log("Будильник №" + item.id + " заведен на " + item.time));
    }

    /**
     *  Удаление всех звонков
     */
    clearAlarms() {
        // останавливаем
        stop();
        //удаляем все звонки
        this.alarmCollection = [];
    }
}


function testCase() {
    let phoneAlarm = new AlarmClock();

    //Test case 1: текущее время, вывод текста, функция выполняется несколько раз;
    phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(),
        () => console.log("Пора вставать!"), 1);

    //Test case 2: время +1 мин  от текущего, вывод текста + удаление звонка
    // 1 мин = 1 * 60 сек * 10**3    
    let time = Date.now() + 60000;
    phoneAlarm.addClock(phoneAlarm.getFormattedTime(time), () => {
        console.log("Давай, вставай уже!");
        phoneAlarm.removeClock(2);
    }, 2);

    //Test case 3: время + 2 мин; callback: 1. вывод текста, 2. остановка всех, 3. очистка, 4. вывод 
    time = Date.now() + 120000;
    phoneAlarm.addClock(phoneAlarm.getFormattedTime(time), () => {
        console.log("Иди умываться!");
        phoneAlarm.clearAlarms();  
        phoneAlarm.printAlarms();    
    }, 3);

    phoneAlarm.printAlarms();

    phoneAlarm.start();
}

testCase();
