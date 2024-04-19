//fortune teller
//returns a random fortune to the user using JS!
const fortunes = ['you are going to be very lucky in the near future', 'you are going to get a new car sometime tomorrow', 
                    'you are going to die alone', 'you will become a bakabear tomorrow', 'they are after you', 'do not go outside tomorrow'] 

                    const generateRandomIndex = (max) => {
                        return Math.floor(Math.random() * max);
                      };
                      
                      const generateFortune = () => {
                        const index = generateRandomIndex(fortunes.length);
                        return fortunes[index];
                      };
                      
                      const showFortune = () => {
                        const fortune = generateFortune();
                        console.log("Your fortune for today is:");
                        console.log(fortune);
                      };

showFortune()
