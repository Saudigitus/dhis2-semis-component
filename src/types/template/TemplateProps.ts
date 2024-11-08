type EnumBorderType = "all" | "bottom" | "top"
interface WithBorderProps {
    children?: React.ReactNode
    type: EnumBorderType
    style?: any
}

interface WithPaddingProps {
    children?: React.ReactNode
    p?: string
}

export type { WithBorderProps, WithPaddingProps }
