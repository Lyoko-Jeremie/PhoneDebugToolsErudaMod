import eruda from 'eruda';
import erudaCode from 'eruda-code';
import type {LifeTimeCircleHook, LogWrapper} from '../../../dist-BeforeSC2/ModLoadController';
import type {SC2DataManager} from '../../../dist-BeforeSC2/SC2DataManager';
import type {ModUtils} from '../../../dist-BeforeSC2/Utils';

export class PhoneDebugToolsEruda implements LifeTimeCircleHook {
    logger: LogWrapper;

    constructor(
        public gSC2DataManager: SC2DataManager,
        public gModUtils: ModUtils,
    ) {
        this.logger = gModUtils.getLogger();
        this.gSC2DataManager.getModLoadController().addLifeTimeCircleHook('PhoneDebugToolsEruda', this);
    }

    async ModLoaderLoadEnd() {
        eruda.init();
        eruda.add(erudaCode);
    }
}
