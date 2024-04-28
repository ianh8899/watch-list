import WatchForm from "../components/WatchForm"
import EditWatch from "../components/EditWatch"
import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { deleteWatch } from "../server-actions/deleteWatch";

export default async function WatchList(){
const cookieStore = cookies();
const supabase = createServerComponentClient({cookies: () => cookieStore});
const { data: {session} } = await supabase.auth.getSession();
const user = session?.user;

const { data: watches, error } = await supabase
    .from('watches')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', {ascending: false});

    if (error) {
        console.error('Error fetching watches', error);
    }

    return (
        <div>
            <div>
                <div className="min-h-screen bg-gray-800 text-white p-4">
                    <div className="flex items-center justify-around">
                        <h1 className="text-4xl font-bold mb-4">Watch List</h1>
                        <div className="flex items-center justify-center gap-20">
                        <p className="text-lg">Signed in as {user.email}</p>
                        <form action="/auth/signout" method="post">
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type="submit">
                                Sign Out
                            </button>
                        </form>
                        </div>
                    </div>
                    <WatchForm />
                    <div className="mt-8">
                        {
                            watches.map((watch) => 
                            <div key={watch.id} className="bg-gray-700 p-4 rounded shadow-lg mb-4 max-w-md mx-auto">
                                <h2 className="text-2xl font-bold mb-2">{watch.brand} - {watch.model}</h2>
                                <div className="flex justify-between">
                                    <form action={deleteWatch}>
                                        <input type="hidden" name="id" value={watch.id} />
                                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type="submit">
                                            Delete
                                        </button>
                                    </form>
                                    <EditWatch watch={watch} />
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}