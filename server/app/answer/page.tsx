import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import Answer from '../components/answer';
// import AutoRefresh from '../components/auto-refresh';

export default async function Page({ searchParams }: { searchParams: Promise<{ code?: number }> }) {
  const { code } = await searchParams;
  if (!code) {
    return <p>No code was provided</p>
  }

  const supabase = createClient(await cookies())

  const { data: latestQuestion, error } = await supabase
    .rpc('get_latest_question_by_code', { p_code: code })
    .maybeSingle();

  if (error) {
    console.error('Error fetching question:', error);
  } else {
    console.log('Latest Question:', latestQuestion);
  }

  return (
    <>
      {/* <AutoRefresh interval={2000} /> */}
      {latestQuestion ?
        <Answer question={latestQuestion} />
        : <div>Loading question ...</div>}
    </>
  )
}

