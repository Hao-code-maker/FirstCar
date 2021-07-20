
import { _decorator, Component, Node } from 'cc';
import { Car } from './Car';
const { ccclass, property } = _decorator;

@ccclass('CarManager')
export class CarManager extends Component {
    @property({
        type:Car
    })
    mainCar:Car | null = null;

    public resetCars(points:Node[]) {
        if(points.length <= 0){
            console.warn('There is no points in this map');
            return;
        }

        this._createMainCar(points[0]);
    }

    private _createMainCar(point : Node) {
        if(!this.mainCar){
            this.mainCar = this.node.children[0].getComponent(Car);
      
            this.mainCar?.setEntry(point);
        }
    }

    public controlMoving(isRunning = true) {
        if(isRunning) {
            this.mainCar?.startRunning();
        }else{
            this.mainCar?.stopRunning();
        }
    }
}


