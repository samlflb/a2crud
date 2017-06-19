export class Init{
    load(){
        if(localStorage.getItem('phonelist')===null || localStorage.getItem('phonelist')==undefined){
            console.log('no smartphone found...creating..');
            var smartphone=[
                    {
                        text:'apple iphone8'
                    },

                    {
                        text:'samsung S8'
                    },

                    {
                        text:'htc U11'
                    },

                    {
                        text:'asus zenfone4'
                    }
            ];  

            localStorage.setItem('phonelist',JSON.stringify(smartphone));
            return
        }else{
            console.log('found smartphone...');
        }
    }
}