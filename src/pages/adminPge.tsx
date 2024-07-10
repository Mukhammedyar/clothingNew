import AdminCategories from "../components/AdminCategories"
import AdminProducts from "../components/AdminProducts"

export default function AdminPage() {
  return (
    <div className="bg-zinc-950 h-[100vh] text-white montserrat-normal">
        <AdminCategories/>
        <AdminProducts/>
        <div>
          <h1>Acsessoures</h1>
        </div>
        
    </div>
  )
}
