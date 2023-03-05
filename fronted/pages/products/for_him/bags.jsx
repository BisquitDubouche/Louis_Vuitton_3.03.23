import { MainLayout } from "@/components/main_layout";
import Navbar from "@/components/navbar/Navbar";

const ForHim = () => {
  return (
    <MainLayout title="Luxury Designer Handbags & Purses - Woman's Gags">
      <Navbar />
      <div className='filter-container'>
        <span>All Handbags</span>
        <button>
          Filters
          <img
            src='https://icons.veryicon.com/png/o/miscellaneous/alicloud-official-website/filter-32.png'
            alt='error'
          />
        </button>
      </div>
    </MainLayout>
  );
};

export default ForHim;
