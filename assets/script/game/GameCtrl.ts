
import { _decorator, Component, Node, systemEvent, SystemEvent,EventMouse, System } from 'cc';
import { CarManager } from './CarManager';
import { MapManager } from './MapManager';
const { ccclass, property } = _decorator;

@ccclass('GameCtrl')
export class GameCtrl extends Component {
    @property({
        type:MapManager
    })
    mapManager:MapManager | null = null;

    @property({
        type:CarManager
    })
    carManager:CarManager | null = null;

    public onLoad(){
       
        this.mapManager?.resetMap();
        
        const currPath = this.mapManager?.currPath;
        if(currPath)
        this.carManager?.resetCars(currPath);
    }

    public start(){
        
      systemEvent.on(SystemEvent.EventType.MOUSE_DOWN, this._touchStart, this);
      systemEvent.on(SystemEvent.EventType.MOUSE_UP, this._touchEnd, this);
    }

    private _touchStart(event:EventMouse) {
        this.carManager?.controlMoving();
    }
    
    private _touchEnd(event:EventMouse) {
        this.carManager?.controlMoving(false);
    }
}

