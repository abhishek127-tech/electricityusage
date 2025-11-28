// components/sample.tsx
"use client"

import { useState } from "react"
import { useAccount } from "wagmi"
import { useVotingContract } from "@/hooks/useContract"

const SampleIntegration = () => {
  const { isConnected } = useAccount()
  const [candidateId, setCandidateId] = useState("")

  const { candidateCount, vote, state } = useVotingContract()

  const handleVote = async () => {
    try {
      if (!candidateId) return
      await vote(Number(candidateId))
      setCandidateId("")
    } catch (err) {
      console.error("Error:", err)
    }
  }

  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Please connect your wallet to interact with the contract.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Simple Voting Contract</h1>

      <div className="mb-4 p-4 border rounded-lg">
        <p className="text-lg">Total Candidates: {candidateCount?.toString() ?? "Loading..."}</p>
      </div>

      <div className="space-y-3">
        <input
          type="number"
          placeholder="Candidate ID"
          value={candidateId}
          onChange={(e) => setCandidateId(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <button
          onClick={handleVote}
          disabled={state.isLoading}
          className="w-full p-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          {state.isLoading ? "Voting..." : "Vote"}
        </button>
      </div>

      {state.hash && (
        <div className="mt-4 p-3 border rounded">
          <p>Transaction Hash:</p>
          <p className="truncate">{state.hash}</p>
          {state.isConfirming && <p className="text-yellow-500">Confirming...</p>}
          {state.isConfirmed && <p className="text-green-600">Confirmed!</p>}
        </div>
      )}

      {state.error && (
        <div className="mt-4 p-3 border border-red-500 rounded text-red-600">
          Error: {state.error.message}
        </div>
      )}
    </div>
  )
}

export default SampleIntegration
