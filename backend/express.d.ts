// Fix for the type issues in server.ts
// This is a type declaration file that helps Express work correctly with TypeScript

// This ensures TypeScript will not error on Express router methods
declare module 'express' {
  export interface Request {
    [key: string]: any;
    body: any;
    params: any;
    query: any;
  }
  
  export interface Response {
    [key: string]: any;
    status(code: number): Response;
    json(data: any): Response;
    send(body: any): Response;
  }
  
  export interface Router {
    get(path: string, ...handlers: any[]): any;
    post(path: string, ...handlers: any[]): any;
    put(path: string, ...handlers: any[]): any;
    delete(path: string, ...handlers: any[]): any;
    use(...handlers: any[]): any;
  }
  
  export interface Application {
    get(path: string, ...handlers: any[]): any;
    post(path: string, ...handlers: any[]): any;
    put(path: string, ...handlers: any[]): any;
    delete(path: string, ...handlers: any[]): any;
    use(...handlers: any[]): any;
    listen(port: number, callback?: () => void): any;
  }
  
  // Function to create a router
  export function Router(): Router;
  
  export default function(): Application;
  
  // Extra methods attached to the express function
  namespace e {
    export function Router(): Router;
  }
  
  // Add the Router method to the default function
  export default interface ExpressDefault {
    Router(): Router;
  }
}
