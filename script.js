/* Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
Метод, який виводить на екран інформацію про автомобіль.
Додавання ім’я водія у список
Перевірка водія на наявність його ім’я у списку
Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.  */

const carObject = {
  brand: "Honda",
  model: "Civic",
  year: 2019,
  averageSpeed: 100,
  fuelTankVolume: 150,
  averageConsumption: 10,
  drivers: [driver1 = 'Peter Parker', driver2 = 'John Doe']

}
console.log(carObject.brand)

carObject.addDriver = function (driver) {
  this.drivers.push(driver);
}

carObject.hasDriver = function (driver) {
  return this.drivers.includes(driver);
}

carObject.calculateTimeAndFuel = function (distance) {
  
  let time = distance / this.averageSpeed;
  let fuel = (time * this.averageConsumption) / 100;
  return { time, fuel };
}

console.log(carObject.calculateTimeAndFuel(100));

/* Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
Для виведення часу на екран.
Зміни часу на передану кількість секунд.
Зміни часу на передану кількість хвилин.
Зміни часу на передану кількість годин.
Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин. */

const time = {
  hours: 20,
  minutes: 59,
  seconds: 45,

  // Вивести час на екран у форматі HH:MM:SS
  showTime() {
    const h = this.hours.toString().padStart(2, '0');
    const m = this.minutes.toString().padStart(2, '0');
    const s = this.seconds.toString().padStart(2, '0');
    console.log(`${h}:${m}:${s}`);
  },

  // Додаємо секунди
  addSeconds(sec) {
    let totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds + sec;

    // Враховуємо добу: 24 години = 86400 секунд
    totalSeconds = ((totalSeconds % 86400) + 86400) % 86400;

    this.hours = Math.floor(totalSeconds / 3600);
    this.minutes = Math.floor((totalSeconds % 3600) / 60);
    this.seconds = totalSeconds % 60;
  },

  // Додаємо хвилини
  addMinutes(min) {
    this.addSeconds(min * 60);
  },

  // Додаємо години
  addHours(hour) {
    this.addSeconds(hour * 3600);
  }
};

// Приклади використання:
time.showTime();         // 20:59:45

time.addSeconds(30);
time.showTime();         // 21:00:15

time.addMinutes(75);
time.showTime();         // 22:15:15

time.addHours(3);
time.showTime();         // 01:15:15 (наступна доба, якщо більше 24 годин)


/* Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
Складання 2-х об'єктів-дробів.
Віднімання 2-х об'єктів-дробів.
Множення 2-х об'єктів-дробів.
Ділення 2-х об'єктів-дробів.
Скорочення об'єкта-дробу. */

const fraction = {
  numerator: 1,
  denominator: 2,

  // Складання 2-х об'єктів-дробів
  add(fraction2) {
    const numerator = this.numerator * fraction2.denominator + this.denominator * fraction2.numerator;
    const denominator = this.denominator * fraction2.denominator;
    return { numerator, denominator };
  },

  // Віднімання 2-х об'єктів-дробів
  subtract(fraction2) {
    const numerator = this.numerator * fraction2.denominator - this.denominator * fraction2.numerator;
    const denominator = this.denominator * fraction2.denominator;
    return { numerator, denominator };
  },

  // Множення 2-х об'єктів-дробів
  multiply(fraction2) {
    const numerator = this.numerator * fraction2.numerator;
    const denominator = this.denominator * fraction2.denominator;
    return { numerator, denominator };
  },

  // Ділення 2-х об'єктів-дробів
  divide(fraction2) {
    const numerator = this.numerator * fraction2.denominator;
    const denominator = this.denominator * fraction2.numerator;
    return { numerator, denominator };
  },

  // Скорочення об'єкта-дробу
  reduce() {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const numerator = this.numerator / gcd(this.numerator, this.denominator);
    const denominator = this.denominator / gcd(this.numerator, this.denominator);
    return { numerator, denominator };
  }
}