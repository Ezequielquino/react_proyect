export class MenuItemGroupModel {
    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly icon: JSX.Element,
        public readonly items: MenuItemRouterModel[]
    ) {}
}

export class MenuItemRouterModel {
    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly route: string
    ) {}
}
