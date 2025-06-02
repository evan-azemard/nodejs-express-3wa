export const requestLoggeer = (request, _response, next) => {
    console.log(`[${request.method}, ${request.path}]`)
    next()
}