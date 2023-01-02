// #################################

//  Light - Dark mode change section 

// ###################################

const darkLight = document.querySelector('.toggleDarkLight');
const darkLight2 = document.querySelector('.toggleDarkLight2');
const h2modechange = document.querySelector('.h2modechange')
const h2modechange2 = document.querySelector('.h2modechange2')
const signUpModechange = document.querySelector('.signUp')
const signUpModechange2 = document.querySelector('.signUp2')
const formmodechange = document.querySelector('.formClass')
const formmodechange2 = document.querySelector('.formClass2')
const boxShadiowing = document.querySelectorAll('.BTNS')
const inputs = document.querySelectorAll('.allInput');
const imgIllustrationToggler = document.querySelector('.imgIlustration')
 
let toggler = true;
darkLight.addEventListener('click', () => {
    if (toggler) {
        imgIllustrationToggler.classList.add('illustration2','heighter')
        h2modechange.classList.add('darkModeSignup')
        formmodechange.classList.add('darkModeForm2','boxshadowing')
        signUpModechange.classList.add('darkModeForm')
        darkLight.classList.add('darkModeSignup')
        darkLight.innerText = 'Light Mode'
        for (let i of boxShadiowing){
            i.classList.add('boxshadowing')
        }
        for (let j of inputs) {
            j.classList.add('darkModeForm2','place','darkModeSignup','bordercolor')
        }
        console.log("whitemode");
        toggler = false;
    }
    else {
        imgIllustrationToggler.classList.remove('illustration2','heighter')
        h2modechange.classList.remove('darkModeSignup')
        formmodechange.classList.remove('darkModeForm2','boxshadowing')
        signUpModechange.classList.remove('darkModeForm')
        darkLight.classList.remove('darkModeSignup')
        darkLight.innerText = 'Dark Mode'
        for (let i of boxShadiowing){
            i.classList.remove('boxshadowing')
        }
        for (let j of inputs) {
            j.classList.remove('darkModeForm2','place','darkModeSignup','bordercolor')
        }
        console.log("blackmode");
        toggler = true;
    }
    
})
darkLight2.addEventListener('click', () => {
    if (toggler) {
        imgIllustrationToggler.classList.add('illustration2','heighter')
        h2modechange2.classList.add('darkModeSignup')
        formmodechange2.classList.add('darkModeForm2','boxshadowing')
        signUpModechange2.classList.add('darkModeForm')
        darkLight2.classList.add('darkModeSignup')
        darkLight2.innerText = 'Light Mode'
        for (let i of boxShadiowing){
            i.classList.add('boxshadowing')
        }
        for (let j of inputs) {
            j.classList.add('darkModeForm2','place','darkModeSignup','bordercolor')
        }
        console.log("whitemode");
        toggler = false;
    }
    else {
        imgIllustrationToggler.classList.remove('illustration2','heighter')
        h2modechange2.classList.remove('darkModeSignup')
        formmodechange2.classList.remove('darkModeForm2','boxshadowing')
        signUpModechange2.classList.remove('darkModeForm')
        darkLight2.classList.remove('darkModeSignup')
        darkLight2.innerText = 'Dark Mode'
        for (let i of boxShadiowing){
            i.classList.remove('boxshadowing')
        }
        for (let j of inputs) {
            j.classList.remove('darkModeForm2','place','darkModeSignup','bordercolor')
        }
        console.log("blackmode");
        toggler = true;
    }
    
})




//                 END OF             //








//###################################
// Validations
//#######################################

const inputs2 =document.querySelectorAll('.allInput2')
const submit = document.querySelectorAll('.signUpNow')

submit.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        if (!item.classList.contains('signUpnow2')) {
            let City = document.querySelector('#City')
            if (City.value.trim() === '') {
                k =document.querySelector('.cityCoution')
                k.classList.add('Visible')
                City.style.backgroundColor = 'red'
                
            } else {
                k =document.querySelector('.cityCoution')
                City.style.backgroundColor = 'white'
                k.classList.remove('Visible')
            }
            let zipcode = document.querySelector('#zipCode')
            if (zipcode.value.trim() === '') {
                z =document.querySelector('.zipcautin')
                z.classList.add('Visible')
                zipcode.style.backgroundColor = 'red'
            } else {
                z =document.querySelector('.zipcautin')
                z.classList.remove('Visible')
                zipcode.style.backgroundColor = 'white'
                
            }
            for (let i of inputs) {
                 
                for (let j = 0; j < 5; j++) {
                     
                    if (i.id === 'email') {
                        if ((i.value.slice(-3).trim() === '.ge') &&  i.value.includes('@')){
                            let p = document.querySelector('.emailcaution')
                            p.classList.remove('Visible')
                            
                            break;
                        }
                        
                        else {
                            
                            i.style.backgroundColor = 'red';
                            let p = document.querySelector('.emailcaution')
                            p.classList.add('Visible')
                            break; 
                        }
                    }
                    else if (i.id === 'country') {
                        if (i.value === 'selected') {
                            countryp = document.querySelector('.countryCoution')
                            i.style.backgroundColor = 'red';
                            countryp.classList.add('Visible')
                            
                            return false;
                        }
                        else { 
                            i.style.backgroundColor = 'white';
                            countryp = document.querySelector('.countryCoution')
                            countryp.classList.remove('Visible')
                            
                            return true;
                        }
                        
                }
                    else if (i.id === 'City') {
                        console.log('aq xar')
                }
                    }   
                        
            }
        }
        else {
            let City2 = document.querySelector('.City2')
            if (City2.value.trim() === '') {
                k =document.querySelector('.cityCoution2')
                k.classList.add('Visible')
                City2.style.backgroundColor = 'red'
                
            } else {
                k2 =document.querySelector('.cityCoution2')
                City2.style.backgroundColor = 'white'
                k2.classList.remove('Visible')
            }
            
            let zipcode2 = document.querySelector('.zipCode2')
            if (zipcode2.value.trim() === '') {
                z2 =document.querySelector('.zipcautin2')
                z2.classList.add('Visible')
                zipcode2.style.backgroundColor = 'red'
            } else {
                z2 =document.querySelector('.zipcautin2')
                z2.classList.remove('Visible')
                zipcode2.style.backgroundColor = 'white'
                
            }
            for (let i of inputs2) {
                 
               for (let j = 0; j < i.value.length; j++) { 
                   if (i.id === 'email') {
                       if ((i.value.slice(-3).trim() === '.ge') &&  i.value.includes('@')){
                           let p = document.querySelector('.emailcaution2')
                           p.classList.remove('Visible')
                           break;
                       }
                       
                       else {
                            i.style.backgroundColor = 'red';
                           let p = document.querySelector('.emailcaution2')
                           p.classList.add('Visible')
                           break; 
                       }
                   }
                   else if (i.id === 'country') {
                    if (i.value === 'selected') {
                        countryp = document.querySelector('.countryCoution2')
                        i.style.backgroundColor = 'red';
                        countryp.classList.add('Visible')
                        
                        return false;
                    }
                    else { 
                        i.style.backgroundColor = 'white';
                        countryp = document.querySelector('.countryCoution2')
                        countryp.classList.remove('Visible')
                        console.log('good')
                        return true
                    }
                    
                       
                       }
                       
                   }
                        
            }
        } 
        }
    )
})

///// The end ////
