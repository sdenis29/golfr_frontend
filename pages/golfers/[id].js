import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useGolfer from '../../lib/useGolfer'
import ScoreCard from '../../components/ScoreCard'
import Layout from '../../components/Layout'

const GolferProfile = () => {
  const router = useRouter()
  const { id } = router.query
  const { golfer, error } = useGolfer(id)

  return (
    <Layout>
      <>
        {error ? (error) : (
          <>
            {golfer ? (
              <div className="justify-center">
                <div className="max-w-lg mx-auto bg-white
                                shadow-md border border-gray-200
                                rounded-lg max-w-sm mb5">
                  <div className="p-5 text-center">
                    <h1 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                      {golfer.user.name}
                    </h1>
                    <h2 className="font-normal text-gray-700 mb-3">
                      {golfer.user.email}
                    </h2>
                  </div>
                </div>
                <h1 className="text-gray-800 font-bold text-xl tracking-tight mb-2 ml-2">
                  Latest scores
                </h1>
                {golfer.scores && golfer.scores.map(score => (
                  <ScoreCard
                    key={score.id}
                    id={score.id}
                    totalScore={score.total_score}
                    playedAt={score.played_at}
                    userId={score.user_id}
                    userName={score.user_name}
                  />
                ))}
              </div>
            ) : (
              'LOADING'
            )}
          </>
        )}
      </>
    </Layout>
  )
}

export default GolferProfile

