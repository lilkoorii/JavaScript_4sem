var task= +prompt("Введите номер задания");
switch (task){
    case 1:
        {
            var products = {
                shoewear: {
                    boots: {
                        1: {
                            number: 113,
                            size: 39,
                            colour: "Синий",
                            price: 22,
                        },
                        2: {
                            number: 114,
                            size: 36,
                            colour: "Синий",
                            price: 50,
                        },
                        3: {
                            number: 115,
                            size: 38,
                            colour: "Розовый",
                            price: 14,
                        },

                    },
                    sneakers: {
                        1: {
                            number: 121,
                            size: 36,
                            colour: "Фиолетовый",
                            price: 53,
                        },
                        2: {
                            number: 122,
                            size: 40,
                            colour: "Мятный",
                            price: 33,
                        },
                        3: {
                            number: 124,
                            size: 38,
                            colour: "Голубой",
                            price: 77,
                        },
                    },
                    sandals: {
                        1: {
                            number: 137,
                            size: 38,
                            colour: "Голубой",
                            price: 17,
                        },
                        2: {
                            number: 138,
                            size: 39,
                            colour: "Белый",
                            price: 54,
                        },
                        3: {
                            number: 139,
                            size: 44,
                            colour: "Черный",
                            price: 26,
                        },
                    }
                },
                filterPricesByRange(minPrice, maxPrice) {
                    const numbers = [];
                
                    for (const categoryKey of Object.keys(this)) { //получаем ключи пока не доберемся до пар обуви
                      const category = this[categoryKey];
                      for (const productKey of Object.keys(category)) {
                        const product = category[productKey];
                        for (const variantKey of Object.keys(product)) {
                          const variant = product[variantKey];
                
                          if ((variant.price >= minPrice) && (variant.price <= maxPrice)) {
                            numbers.push(variant.number);
                          }
                        }
                      }
                    }
                    return numbers;
                },

                filterSizes(qSize) {
                    const sizes = [];
                
                    for (const categoryKey of Object.keys(this)) {
                      const category = this[categoryKey];
                
                      for (const productKey of Object.keys(category)) {
                        const product = category[productKey];
                
                        for (const variantKey of Object.keys(product)) {
                          const variant = product[variantKey];
            
                          if ((variant.size == qSize)) {
                            sizes.push(variant.number);
                          }
                        }
                      }
                    }
                    return sizes;
                },

                filterColors(qColor) {
                    const colors = [];
                
                    for (const categoryKey of Object.keys(this)) {
                      const category = this[categoryKey];
                
                      for (const productKey of Object.keys(category)) {
                        const product = category[productKey];
                
                        for (const variantKey of Object.keys(product)) {
                          const variant = product[variantKey];
            
                          let oneColor = variant.colour.toLowerCase();
                          if (((oneColor) == qColor)) {
                            colors.push(variant.number);
                          }
                        }
                      }
                    }
                    return colors;
                },

                filterShoes() {
                    let f = prompt("Введите фильтр: цена/размер/цвет");
                    filter=f.toLowerCase();
                    switch(filter){
                        case "цена":{
                            let minPrice = +prompt("Введите минимальную цену", 5);
                            let maxPrice = +prompt("Введите миаксимальную цену", 50);
                            document.write(`Номера продуктов в диапазоне цен: ${products.filterPricesByRange(minPrice, maxPrice)}`);
                        }
                        break;
                        case "размер":{
                            let qSize = +prompt("Введите нужный размер", 39);
                            document.write(`Номера продуктов нужного размера: ${products.filterSizes(qSize)}`);
                        }
                        break;
                        case "цвет":{
                            let q = prompt("Введите нужный цвет", "Синий");
                            qColor=q.toLowerCase();
                            document.write(`Номера продуктов нужного цвета: ${products.filterColors(qColor)}`);
                        }
                        break;
                    }
                }                
            }
            products.filterShoes();
        }
        break;
    case 2:
        {
            
        }
        break;
    case 3:
        {
            var newProducts = {
                shoewear: {
                    boots: {
                        1: {
                            number: 113,
                            size: 39,
                            colour: "Синий",
                            cost: 50,
                            discount: 22,
                        },
                        2: {
                            number: 114,
                            size: 36,
                            colour: "Синий",
                            cost: 50,
                            discount: 15,
                        },
                        3: {
                            number: 115,
                            size: 38,
                            colour: "Розовый",
                            cost: 14,
                            discount: 5,
                        },

                    },
                    sneakers: {
                        1: {
                            number: 121,
                            size: 36,
                            colour: "Фиолетовый",
                            cost: 53,
                            discount: 50,
                        },
                        2: {
                            number: 122,
                            size: 40,
                            colour: "Мятный",
                            cost: 25,
                            discount: 15,
                        },
                        3: {
                            number: 124,
                            size: 38,
                            colour: "Голубой",
                            cost: 77,
                            discount: 70,
                        },
                    },
                    sandals: {
                        1: {
                            number: 137,
                            size: 38,
                            colour: "Голубой",
                            cost: 17,
                            discount: 3,
                        },
                        2: {
                            number: 138,
                            size: 39,
                            colour: "Белый",
                            cost: 54,
                            discount: 30,
                        },
                        3: {
                            number: 139,
                            size: 44,
                            colour: "Черный",
                            cost: 26,
                            discount: 40,
                        },
                    }
                }
            }

            for (let type in newProducts.shoewear) {
                for (let item in newProducts.shoewear[type]) {
                  Object.defineProperty(newProducts.shoewear[type][item], 'price', {
                    get() {
                        let price = this.cost - ((this.cost)*(this.discount/100))
                      return price;
                    },
                    set() {
                      if (typeof price !== 'number' || newPrice < 0) {
                        throw new Error('Invalid price value');
                      }
                      this.price = price;
                    }
                  });
                }
              }
            document.write("Стоимость кроссовок со скидкой: " + newProducts.shoewear.sneakers[1].price);

            for (let type in newProducts.shoewear) {  // настройка свойств
                for (let item in newProducts.shoewear[type]) {
                    /*Object.defineProperty(newProducts.shoewear[type][item], 'price', { //цена уже есть...
                        writeable: true,
                        enumerable: true,
                        configurable: false
                    });*/
                    Object.defineProperty(newProducts.shoewear[type][item], 'number', {
                        writeable: false,
                        enumerable: true,
                        configurable: false
                    });
                }
              }
        }
        break;
    case 4:
        {
            /*Object.defineProperty(newProducts.shoewear.sneakers, 'price', {
                writeable: true,
                enumerable: true,
                configurable: false
            });
            Object.defineProperty(newProducts, 'number', {
                writeable: false,
                enumerable: true,
                configurable: false
            });*/
        }
        break;
    case 5:
        {
            var allProducts = {
                shoewear: {
                    boots: {
                        1: {
                            number: 113,
                            size: 39,
                            colour: "Синий",
                            cost: 50,
                            discount: 22,
                        },

                    },
                    sneakers: {
                       
                    },
                    sandals: {
                        
                    }
                }
            }

            function ShoePair(number, size, colour, cost, discount){ //конструктор, собирает ботинки
                this.number = number;
                this.size = size;
                this.colour = colour;
                this.cost = cost;
                this.discount = discount;
            }

            let product = new ShoePair;

            for (let type in allProducts.shoewear) {
                for (let item in allProducts.shoewear[type]) {
                  let data = new ShoePair(
                    this.number,
                    this.size,
                    this.colour,
                    this.cost,
                    this.discount
                  );
                }
            }
            const newShoe = new ShoePair(112, 50, "Бежевый", 40, 20);
            const newShoe2 = new ShoePair(112, 39, "Голубенький", 70, 50);
            allProducts.shoewear.boots[2] = newShoe;
            allProducts.shoewear.sandals[1] = newShoe2;
            document.write(allProducts.shoewear.boots[2].colour + " " + allProducts.shoewear.sandals[1].colour);
            
        }
        break;
}