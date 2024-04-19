//fortune teller
//returns a random fortune to the user using JS!
const fortunes = ['you are going to be very lucky in the near future', 'you are going to get a new car sometime tomorrow', 
                    'you are going to die alone', 'you will become a bakabear tomorrow', 'they are after you', 'do not go outside tomorrow'] 
            
const fortuneTeller = name => {
    return name + 'this is your fortune' + fortunes.random()
}
console.log(fortuneTeller)