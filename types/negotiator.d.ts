declare module 'negotiator' {
  interface Headers {
    [key: string]: string
  }

  class Negotiator {
    constructor(options: { headers: Headers })
    languages(): string[]
    // Thêm các method khác nếu cần
  }

  export default Negotiator
}