
import { _decorator, Component, Node, Enum, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

enum ROAD_POINT_TYPE{
    NORMAL = 1,
    START,
    GREETING,
    GOODBYE,
    END,
    AI_START
}
Enum(ROAD_POINT_TYPE);

enum ROAD_MOVE_TYPE{
    LINE = 1,
    CURVE
}
Enum(ROAD_MOVE_TYPE);

@ccclass('RoadPoint')
export class RoadPoint extends Component {

    @property({
        type:ROAD_POINT_TYPE,
        tooltip:'路径点的类型:普通点,开始点,结束点,接客点,送客点, AI小车开始点,默认是Normal',
        displayOrder:1
    })
    type = ROAD_POINT_TYPE.NORMAL;

    @property({
        type:Node,
        tooltip:'下一站,类型是Node'
    })
    nextStation:Node | null = null;

    @property({
        type:ROAD_MOVE_TYPE,
        tooltip:'路的类型:直线型和弯道,默认直线型',
        displayOrder:2
    })
    moveType = ROAD_MOVE_TYPE.LINE;

    @property({
        tooltip:'弯道类型:顺时针,逆时针,默认顺时针'
    })
    clockWise = true;

    @property({
        type:Vec3,
        tooltip:'接客方向:默认在右边,x为正'
    })
    direction = new Vec3(1, 0, 0,)

    @property({
        tooltip:'Ai 小车产出间隔:默认3,数值越大产出越快'
    })
    interval = 3;

    @property({
        tooltip:'产出小车的延迟时间,默认是0,时间一到就产出小车,不延迟'
    })
    delayTime = 0;

    @property({
        tooltip:'Ai 小车速度,根据帖值, 0.05'
    })
    speed = 0.05;

    @property({
        tooltip:'在这个路径里,Ai小车的类型'
    })
    cars = '201'


}


