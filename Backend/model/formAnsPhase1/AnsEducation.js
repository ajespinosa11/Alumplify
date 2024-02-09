const mongoose = require('mongoose');
const Schema = mongoose.Schema

const EducSchemaAns = new Schema ({
    Answer:{
        quesAns1:{
            type: String,
            require: true
        },
        quesAns2:{
            type: Number,
            default: 0,
            require: true
        },
        quesAns3:{
            type: String,
            require: true
        },
        quesAns4:{
            row1:{
                check1:{
                    type: Boolean
                },
                check2:{
                    type: Boolean
                }
            },
            row2:{
                check1:{
                    type: Boolean
                },
                check2:{
                    type: Boolean
                }
            },
            row3:{
                check1:{
                    type: Boolean
                },
                check2:{
                    type: Boolean
                }
            },
            row4:{
                check1:{
                    type: Boolean
                },
                check2:{
                    type: Boolean
                }
            },
            row5:{
                check1:{
                    type: Boolean
                },
                check2:{
                    type: Boolean
                }
            },
            row6:{
                check1:{
                    type: Boolean
                },
                check2:{
                    type: Boolean
                }
            },
            row7:{
                check1:{
                    type: Boolean
                },
                check2:{
                    type: Boolean
                }
            },
            row8:{
                check1:{
                    type: Boolean
                },
                check2:{
                    type: Boolean
                }
            },
            row9:{
                check1:{
                    type: Boolean
                },
                check2:{
                    type: Boolean
                }
            },
            row10:{
                check1:{
                    type: Boolean
                },
                check2:{
                    type: Boolean
                }
            },
            row11:{
                check1:{
                    type: Boolean
                },
                check2:{
                    type: Boolean
                }
            },
            row12:{
                check1:{
                    type: Boolean
                },
                check2:{
                    type: Boolean
                }
            },
            row13:{
                check1:{
                    type: Boolean
                },
                check2:{
                    type: Boolean
                }
            },
            row14:{
                check1:{
                    type: Boolean
                },
                check2:{
                    type: Boolean
                }
            },
        },
        quesAns5:{
            type: String,
            require: true
        },
        quesAns6:{
            type: String,
            require: true
        },
        quesAns7:{
            checkBox1:{
                type: Boolean
            },
            checkBox2:{
                type: Boolean
            },
            checkBox3:{
                type: Boolean
            }
        },
    }

})

module.exports = mongoose.model('Education', EducSchemaAns)