import Button from '../components/Button';
import FormCustomer from '../components/FormCustomer';
import Layout from '../components/Layout';
import Steps from '../components/Steps';
import Title from '../components/Title';
import Input from '../components/Input';

export default function EventBudget() {
  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-center space-y-10">
          <Steps step="w-1/2" />
          <Title children={'Cotiza tu evento'} />
        </div>
        <div className="flex items-center justify-center  p-6">
          
            <div className='bg-white w-1/2 h-1/2 rounded shadow-sm'>
              <div className='flex items-center justify-center mb-4'>
              <input className='w-full h-40 py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4'></input>
              </div>
            </div>
          </div>
      
      </Layout>
    </>
  );
}
