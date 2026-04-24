
export function getParam(paramName: string): string | null {

    const params = new URL(window.location.href).searchParams

    const value = params.get(paramName)
    if (!value)
        return null

    return value
}