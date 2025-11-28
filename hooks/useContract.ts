// hooks/useContract.ts
"use client"

import { useState, useEffect } from "react"
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { contractABI, contractAddress } from "@/lib/contract"

export interface ContractState {
  isLoading: boolean
  isPending: boolean
  isConfirming: boolean
  isConfirmed: boolean
  hash: `0x${string}` | undefined
  error: Error | null
}

export const useVotingContract = () => {
  const { address } = useAccount()
  const [isLoading, setIsLoading] = useState(false)

  const { data: candidateCount, refetch: refetchCandidateCount } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "getCandidateCount",
  })

  const { writeContractAsync, data: hash, error, isPending } = useWriteContract()

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  })

  useEffect(() => {
    if (isConfirmed) {
      refetchCandidateCount()
    }
  }, [isConfirmed, refetchCandidateCount])

  const vote = async (id: number) => {
    try {
      setIsLoading(true)
      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "vote",
        args: [BigInt(id)],
      })
    } catch (err) {
      console.error("Vote error:", err)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  const getCandidate = async (id: number) => {
    return useReadContract({
      address: contractAddress,
      abi: contractABI,
      functionName: "getCandidate",
      args: [BigInt(id)],
    })
  }

  const state: ContractState = {
    isLoading: isLoading || isPending || isConfirming,
    isPending,
    isConfirming,
    isConfirmed,
    hash,
    error,
  }

  return {
    candidateCount,
    vote,
    getCandidate,
    state,
  }
}
