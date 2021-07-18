
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

interface IEventData{
    func:Function;
    target:any;
}

interface IEvent{
    [eventName:string] : IEventData[];
}
@ccclass('CustomerEventListener')
export class CustomerEventListener extends Component {

    public static handle:IEvent = {};

    //事件的监听
    public static on(eventName:string, cb:Function, target?:any) {
        if(!this.handle[eventName]) {
            this.handle[eventName] = [];
        }

        const data:IEventData = {func:cb, target};
        this.handle[eventName].push(data);
    }   

    //取消监听
    public static off(eventName:string, cb:Function, target?:any){
        const list = this.handle[eventName];
        if(!list || list.length <= 0) {
            return;
        }

        for (let i = 0; i < list.length; i++) {
            const event = list[i];
            if(event.func && (!target || target === event.target)){
                list.splice(i, 1);
                break;
            }
        }
    }
    
    //事件的派发
    public static dispatchEvent (eventName:string, ...args:any){
        const list = this.handle[eventName];
        if(!list || list.length <= 0) {
            return;
        }

        for (let i = 0; i < list.length; i++) {
            const event = list[i];
            event.func.apply(event.target, args);
        }
    }

}


