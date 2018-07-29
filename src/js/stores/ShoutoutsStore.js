import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';

class ShoutoutsStore extends EventEmitter{
    constructor()
    {
        super();
        this.shoutouts =[
            {
                id:1,
                shoutout : "My very first Movie",
                name:"AlohaCode"
            }
            ,
            {
                id:2,
                shoutout:"My very second Movie",
                name:"AlohaCode"
            }
        ];
    }
    actionListener(action)
    {
        switch(action.type)
        {
            case "CREATE_SHOUTOUT":{
                this.createShoutout(
                    action.shoutout,
                    action.name
                );
            }
        }
    }
    createShoutout(shoutout,name)
    {
        const id = Date.now().toString();
        let newSO = new Object();
        newSO.id =id;
        newSO.name = name;
        newSO.shoutout =shoutout;
        this.shoutouts.push(newSO);
        this.emit("newShoutout");
    }
    getShoutouts()
    {
        return this.shoutouts;
    }
}
const shoutoutsStore = new ShoutoutsStore();
dispatcher.register(shoutoutsStore.actionListener.bind(shoutoutsStore));
export default shoutoutsStore;