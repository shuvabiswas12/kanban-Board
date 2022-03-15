import { DragEventHandler, MouseEventHandler } from "react";

interface IDrag {
    onDragEnd?: DragEventHandler<any>;
    onDragStart?: DragEventHandler<any>;
    onDragOver?: DragEventHandler<any>;
    onDragLeave?: DragEventHandler<any>;
    onDragEnter?: DragEventHandler<any>;
    onDrop?: DragEventHandler<any>;
}

export interface IMyCard extends IDrag, IOnClick {
    cardId: number,
    cardName: string,
    cardItems: Array<string>,
}

export interface IMyCardItem extends IDrag, IOnClick {
    itemIndex: number,
    itemText: string,
    cardId?: number,
}

export interface IButton extends IOnClick {
    text?: string,
    icon?: string,
    className?: string,
    iconBg?: string,
    iconColor?: string,
    title?: string,
}


interface IOnClick {
    onChangeEvent?: MouseEventHandler<any>;
    onClickEvent?: MouseEventHandler<any>;
    onDoubleClickEvent?: MouseEventHandler<any>;
}

