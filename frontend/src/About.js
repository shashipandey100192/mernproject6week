import React,{Fragment} from "react"

function Aboutpage()
{
    return <h1>heading one</h1>

}
export default Aboutpage


export function About1()
{
    return <h2>this is name export function</h2>
}

// export function About2()
// {
//     return <section>
//         <div>this is multi elements</div>
//         <h3>heading three</h3>
//         </section>
// }

// export function About2()
// {
//     return <>
//         <div>this is multi elements</div>
//         <h3>heading three</h3>
//         </>
// }



export function About2()
{
    const a=100;

    return <Fragment>
        <div className="first">this is multi elements style</div>
        <h3 style={{color:'red',backgroundColor:"blue",fontSize:`${a}px`}}>heading three</h3>
        </Fragment>
}

export function Mypage()
{
    return <div className="container border bg-danger">
        <div className="row">
            <div className="col-12">
                <h1>use of bootstrap</h1>
            </div>
        </div>
    </div>
}