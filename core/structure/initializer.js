export const initVirtualizer = ({items, itemHeight}) => {

    return {
        totalSize : items.length * itemHeight
    }
}