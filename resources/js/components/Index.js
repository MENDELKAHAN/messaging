import  React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import MessageLine from './MessageLine'

const Index = () => {    
    const [title, setTitle] = useState("inbox");
    const [lineInfo, setLineInfo] = useState([]); 
    useEffect(()=> {
        // let isMounted = true;
        const fetchData = async () => {
            const result = await fetch(title);
            const body = await result.json();
            setLineInfo(body);
        }     
        fetchData();

        },[]);

    return (  
       <section className="flex flex-col break-words bg-white sm:border-1 sm:rounded-md sm:shadow-sm sm:shadow-lg" >
           
          <header className="font-semibold bg-gray-200 text-gray-700 py-5 px-6 sm:py-6 sm:px-8 sm:rounded-t-md">
           <span className="capitalize">{title}</span> 
                
            </header>
             <div className="w-full">
                <div className="flex flex-col md:flex-row">
                    <div className="bg-blue-900 shadow-xl h-16 fixed bottom-0 md:relative md:h-screen z-10 w-full md:w-48">
                        <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">

                            <li className="mr-3 flex-1 cursor-pointer	">
                                <div 

                                
                                className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                                    <i className="fas fa-tasks pr-0 md:pr-3"></i>
                                    <span className={"pb-1 md:pb-0 text-xs md:text-base block md:inline-block " +
                                   
                                    (title == 'inbox' ?   'text-white md:text-white block' : 'text-gray-600 md:text-gray-400 block')
                                    }
                                    
                                    >Inbox</span>
                                </div>
                            </li>
                   
                            <li className="mr-3 flex-1 cursor-pointer"> 
                           
                           
                           
                            <div onClick={() => alert('asdf')}  className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                                    <i className="fa fa-envelope pr-0 md:pr-3"></i><span className={"pb-1 md:pb-0 text-xs md:text-base block md:inline-block " +
                                   
                                   (title == 'sent' ?   'text-white md:text-white block' : 'text-gray-600 md:text-gray-400 block')
                                   }
                                    >Sent</span>
                                </div>
                            </li>
                   
                            <li className="mr-3 flex-1 cursor-pointer	">
                                <div href="deleted" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                                    
                                    <i className="fas fa-chart-area pr-0 md:pr-3 text-blue-600"></i>
                                    <span className={"pb-1 md:pb-0 text-xs md:text-base block md:inline-block " +
                                   
                                   (title == 'deleted' ?   'text-white md:text-white block' : 'text-gray-600 md:text-gray-400 block')
                                   }>Deleted</span>
                                </div>
                            </li>
                   
                            <li className="mr-3 flex-1 cursor-pointer	">
                                <div href="all" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                                    <i className="fa fa-envelope pr-0 md:pr-3"></i><span className={"pb-1 md:pb-0 text-xs md:text-base block md:inline-block " +
                                   
                                   (title == 'all' ?   'text-white md:text-white block' : 'text-gray-600 md:text-gray-400 block')
                                   }>All</span>
                                </div>
                            </li>

                           

                        </ul>
                    </div>           
                
                <div className="main-content flex-1 bg-gray-100 pb-24 md:pb-5">
                    <div className="flex flex-wrap">
                        <ul className="w-full">
                        <MessageLine data={lineInfo}/>
                        </ul>
                    </div>
                </div>
                </div>
                </div>
       </section>
      
    );
}

export default Index;

if (document.getElementById('react_root')) {
    ReactDOM.render(<Index />, document.getElementById('react_root'));
}
