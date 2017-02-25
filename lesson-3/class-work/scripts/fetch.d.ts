interface Headers {
    append:(name:string, value:string)=>void;
    delete:(name:string)=>void;
    get:(name:string)=>string;
    set:(name:string, value:string)=>void;
}

interface Request {
    method:string;
    headers: typeof Headers;
    cache:string;
    clone:()=>Request;
}

interface Response {
    arrayBuffer:()=>PromiseLike<ArrayBuffer>;
    blob:()=>PromiseLike<Blob>;
    formData:()=>PromiseLike<FormData>;
    json:()=>PromiseLike<any>;
    text:()=>PromiseLike<string>
}

interface ResponseBody {
    blob:Blob;
    FormData:FormData;
    BufferSource:any;
    size:any;
}

interface InitRequest {
    method:string;
    headers:typeof Headers;
    redirect:string;
}

interface InitResponse {
    status:string;
    statusText:string;
    headers:string| typeof Headers;
}

declare var Headers:{
    prototype:Headers;
    new():Headers;
}

declare var Request:{
    prototype:Request;
    new(input:string|Request, init?:InitRequest):Request;
}

declare var Response:{
    prototype:Response;
    new(input:ResponseBody, init:InitResponse):Response;
}

declare function fetch(input:string|Request) : PromiseLike<Response>
