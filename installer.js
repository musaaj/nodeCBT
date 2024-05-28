const {sql, Group, User, Module, Topic, Question, Answer} = require('./models');

async function test(){
    try {
        await sql.sync({force: true});
        await Group.create({
            name: 'admin',
            users: [{
                firstName: 'Super',
                lastName: 'Admin',
                username: 'admin',
                password: 'admin123',
                regNo: '00FA874BA0'
            },{
                firstName: 'Supreme',
                lastName: 'Admin',
                username: 'supreme',
                password: 'supreme123',
                regNo: '00FA874BA3'
            }]
        },{
            include: [{model: User, as: 'users'}]
        }),
    
        await Module.create({
            name: 'SS 1',
            topics: [
                {
                    name: 'General Knowledge',
                    questions: [
                        {
                            text: 'Who is the current president of Nigeria?',
                            answers: [
                                {text: 'Muhammadu Buhari', isRight: false},
                                {text: 'Bola Ahmed Tinubu', isRight: true},
                                {text: 'Rabiu Musa Kwankwaso', isRight: false},
                                {text: 'Abdullahi Adamu', isRight: false}
                            ]
                        }
                    ]
                }
            ]
        }, {
            include: [{
                model: Topic,
                as: 'topics',
                include: [{
                    model: Question,
                    as: 'questions',
                    include: [{
                        model: Answer,
                        as: 'answers'
                    }]
                }]
            }]
        })
    
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }};
    
    test()
    