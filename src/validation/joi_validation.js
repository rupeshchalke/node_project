async function main(req, res) {
   
    const Joi = require('joi');
    const schema = Joi.object(  {
        username: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
    
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    
        repeat_password: Joi.ref('password'),
    
        access_token: [
            Joi.string(),
            Joi.number()
        ],

    
        birth_year: Joi.number()
            .integer()
            .min(1900)
            .max(2024),

            mobile_number: Joi.number()
            .integer()
            .min(1000000000)
            .max(1999999999)
            .optional(),

            address:Joi.object(),
            array : Joi.object(),

    
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })


    })

    const schema2 = Joi.object({
        city: Joi.string().required(),
        state: Joi.string().required(),
        country: Joi.string().required(),
        pincode: Joi.number()
        .min(40000)
        .max(555555)
        .required(),
        
    
    })
    // const nu=purseInt(1234567890)
    const address= {
        city : 'Mumbai',
        state:'Maharashtra',
        country:'India',
        pincode:421102,


    }

    // console.log(address);

        // .with('username', 'birth_year')
        // .xor('password', 'access_token')
        // .with('password', 'repeat_password');
    
    
        const data = await schema.validate({ username: 'harsh', birth_year: 2004, mobile_number:1234567899});
        const data2 = await schema2.validate(address);

    // -> { value: { username: 'abc', birth_year: 1994 } }
    console.log(data);
    console.log(data2);
    
    // schema.validate({});
    // // -> { value: {}, error: '"username" is required' }
    
    // // Also -
    
    try {
        const value = await schema.validateAsync({ username: 'abc', birth_year: 1994 });
    }
    catch (err) { }






}

module.exports={
    main:main
  }