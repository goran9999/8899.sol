export type ClubProgram = {
  version: "0.2.0";
  name: "club_program";
  instructions: [
    {
      name: "createClub";
      accounts: [
        {
          name: "realm";
          isMut: true;
          isSigner: false;
        },
        {
          name: "ogRealm";
          isMut: false;
          isSigner: false;
        },
        {
          name: "realmAuthority";
          isMut: true;
          isSigner: false;
        },
        {
          name: "communityTokenHoldingAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "realmConfig";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenOwnerRecord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "splGovernanceProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "voterWeightProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "communityTokenMint";
          isMut: true;
          isSigner: false;
        },
        {
          name: "clubData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "memberData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "clubName";
          type: "string";
        },
        {
          name: "clubType";
          type: "u8";
        },
        {
          name: "roles";
          type: {
            vec: "bytes";
          };
        },
        {
          name: "ownerRole";
          type: "string";
        },
        {
          name: "defaultRole";
          type: {
            option: "string";
          };
        },
        {
          name: "kycConfig";
          type: {
            option: {
              defined: "KycConfig";
            };
          };
        }
      ];
    },
    {
      name: "createClubVault";
      accounts: [
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "memberData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "splGovernanceProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "vaultData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "chainId";
          type: "string";
        }
      ];
    },
    {
      name: "createTreasuryGovernance";
      accounts: [
        {
          name: "splGovernanceProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "realm";
          isMut: false;
          isSigner: false;
        },
        {
          name: "realmConfig";
          isMut: true;
          isSigner: false;
        },
        {
          name: "realmAuthority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "tokenOwnerRecord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "governance";
          isMut: true;
          isSigner: false;
        },
        {
          name: "voterWeightRecord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: true;
          isSigner: false;
        },
        {
          name: "profit";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasuryData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "memberData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "clubData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "maxVotingTime";
          type: "u32";
        },
        {
          name: "voteThresholdPercentage";
          type: "u8";
        },
        {
          name: "sellPermissionConfig";
          type: {
            vec: {
              defined: "SellPermissionDto";
            };
          };
        },
        {
          name: "nftMaxVoterWeight";
          type: {
            option: "u64";
          };
        }
      ];
    },
    {
      name: "addSellPermission";
      accounts: [
        {
          name: "splGovernanceProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "realm";
          isMut: false;
          isSigner: false;
        },
        {
          name: "realmConfig";
          isMut: true;
          isSigner: false;
        },
        {
          name: "realmAuthority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "tokenOwnerRecord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "governance";
          isMut: true;
          isSigner: false;
        },
        {
          name: "governedSpc";
          isMut: true;
          isSigner: false;
        },
        {
          name: "voterWeightRecord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasuryData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "memberData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "maxVotingTime";
          type: "u32";
        },
        {
          name: "sellPermissionConfig";
          type: {
            defined: "SellPermissionDto";
          };
        }
      ];
    },
    {
      name: "supportClub";
      accounts: [
        {
          name: "realm";
          isMut: false;
          isSigner: false;
        },
        {
          name: "memberData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "fundraiseConfig";
          isMut: true;
          isSigner: false;
        },
        {
          name: "financialRecord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasuryData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "depositAmount";
          type: "u64";
        }
      ];
    },
    {
      name: "createClubProposal";
      accounts: [
        {
          name: "governance";
          isMut: true;
          isSigner: false;
        },
        {
          name: "realm";
          isMut: true;
          isSigner: false;
        },
        {
          name: "governanceAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "realmConfig";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proposal";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposalTransactionAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenOwnerRecord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "splGovernanceProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "communityTokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "voterWeightRecord";
          isMut: false;
          isSigner: false;
        },
        {
          name: "offer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "makerOfferedTokens";
          isMut: true;
          isSigner: false;
        },
        {
          name: "escrowedWantedTokens";
          isMut: true;
          isSigner: false;
        },
        {
          name: "makerWantedAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "makerOfferedAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasuryData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proposalMetadata";
          isMut: false;
          isSigner: false;
        },
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "wantedTokensMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "chainId";
          type: "string";
        },
        {
          name: "useDeny";
          type: "bool";
        },
        {
          name: "offeredAmount";
          type: "u64";
        },
        {
          name: "wantedAmount";
          type: "u64";
        },
        {
          name: "action";
          type: "u8";
        },
        {
          name: "dedicatedTaker";
          type: {
            option: "publicKey";
          };
        }
      ];
    },
    {
      name: "allowMember";
      accounts: [
        {
          name: "memberData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "clubData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "roles";
          type: {
            vec: "string";
          };
        }
      ];
    },
    {
      name: "updateMembership";
      accounts: [
        {
          name: "realm";
          isMut: true;
          isSigner: false;
        },
        {
          name: "realmAuthority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "splGovernanceProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "memberAddress";
          isMut: false;
          isSigner: false;
        },
        {
          name: "memberData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        }
      ];
      args: [
        {
          name: "isMember";
          type: "bool";
        }
      ];
    },
    {
      name: "acceptMembership";
      accounts: [
        {
          name: "memberData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "realm";
          isMut: true;
          isSigner: false;
        },
        {
          name: "communityTokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "splGovernanceProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenOwnerRecord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "clubData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "cancelInvitation";
      accounts: [
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "memberData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "memberAddress";
          isMut: false;
          isSigner: false;
        },
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "recipient";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "createFundraise";
      accounts: [
        {
          name: "memberData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasuryData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: true;
          isSigner: false;
        },
        {
          name: "fundraiseConfig";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "finishFundraise";
      accounts: [
        {
          name: "memberData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasuryData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: true;
          isSigner: false;
        },
        {
          name: "fundraiseConfig";
          isMut: true;
          isSigner: false;
        },
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "updateVoterWeight";
      accounts: [
        {
          name: "realm";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasuryData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "voterWeightRecord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "memberData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "maxVoterWeightRecord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposalMetadata";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposal";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "action";
          type: "u8";
        }
      ];
    },
    {
      name: "executeTransaction";
      accounts: [
        {
          name: "governance";
          isMut: true;
          isSigner: false;
        },
        {
          name: "realm";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposal";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposalTransaction";
          isMut: true;
          isSigner: false;
        },
        {
          name: "splGovernanceProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "proposalMetadata";
          isMut: true;
          isSigner: false;
        },
        {
          name: "offer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "makerOfferedTokens";
          isMut: true;
          isSigner: false;
        },
        {
          name: "escrowedWantedTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "maker";
          isMut: true;
          isSigner: false;
        },
        {
          name: "escrowedOfferedTokens";
          isMut: true;
          isSigner: false;
        },
        {
          name: "offeredTokensMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "wantedTokensMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "escrowProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: true;
          isSigner: false;
        },
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "chainId";
          type: "string";
        },
        {
          name: "action";
          type: "u8";
        },
        {
          name: "treasuryIndex";
          type: "u32";
        }
      ];
    },
    {
      name: "cancelEscrow";
      accounts: [
        {
          name: "realm";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "memberData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "offer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "makerOfferedTokens";
          isMut: true;
          isSigner: false;
        },
        {
          name: "maker";
          isMut: true;
          isSigner: false;
        },
        {
          name: "escrowedWantedTokens";
          isMut: true;
          isSigner: false;
        },
        {
          name: "escrowedOfferedTokens";
          isMut: true;
          isSigner: false;
        },
        {
          name: "escrowProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: true;
          isSigner: false;
        },
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proposal";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "chainId";
          type: "string";
        },
        {
          name: "action";
          type: "u8";
        },
        {
          name: "treasuryIndex";
          type: "u32";
        }
      ];
    },
    {
      name: "createProposalMetadata";
      accounts: [
        {
          name: "realm";
          isMut: false;
          isSigner: false;
        },
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proposal";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proposalMetadata";
          isMut: true;
          isSigner: false;
        },
        {
          name: "memberData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "governance";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "treasuryData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "proposalType";
          type: "u8";
        },
        {
          name: "data1";
          type: {
            option: "bytes";
          };
        },
        {
          name: "data2";
          type: {
            option: "bytes";
          };
        },
        {
          name: "data3";
          type: {
            option: "bytes";
          };
        }
      ];
    },
    {
      name: "createWithdrawalProposal";
      accounts: [
        {
          name: "governance";
          isMut: true;
          isSigner: false;
        },
        {
          name: "realm";
          isMut: true;
          isSigner: false;
        },
        {
          name: "realmConfig";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proposal";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposalTransactionAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenOwnerRecord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "splGovernanceProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "communityTokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "voterWeightRecord";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasuryData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasuryToken";
          isMut: false;
          isSigner: false;
        },
        {
          name: "withdrawal";
          isMut: false;
          isSigner: false;
        },
        {
          name: "withdrawalData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "withdrawalMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proposalMetadata";
          isMut: false;
          isSigner: false;
        },
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "useDeny";
          type: "bool";
        },
        {
          name: "withdrawalAmount";
          type: "u64";
        }
      ];
    },
    {
      name: "executeWithdrawalTransaction";
      accounts: [
        {
          name: "governance";
          isMut: true;
          isSigner: false;
        },
        {
          name: "realm";
          isMut: true;
          isSigner: false;
        },
        {
          name: "realmConfig";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposal";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposalMetadata";
          isMut: false;
          isSigner: false;
        },
        {
          name: "splGovernanceProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "treasury";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasuryToken";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasuryData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "withdrawal";
          isMut: true;
          isSigner: false;
        },
        {
          name: "withdrawalData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "withdrawalMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proposalTransaction";
          isMut: true;
          isSigner: false;
        },
        {
          name: "transferProfitData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "escrowProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "updateVoterWeightForGovernance";
      accounts: [
        {
          name: "realm";
          isMut: false;
          isSigner: false;
        },
        {
          name: "voterWeightRecord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "memberData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "distribute";
      accounts: [
        {
          name: "clubData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposal";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "offer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "escrowProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenLedger";
          isMut: true;
          isSigner: false;
        },
        {
          name: "ledgerEntry";
          isMut: true;
          isSigner: false;
        },
        {
          name: "profit";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "profitToken";
          isMut: true;
          isSigner: false;
        },
        {
          name: "escrowedWantedToken";
          isMut: true;
          isSigner: false;
        },
        {
          name: "makerWantedToken";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "treasuryIndex";
          type: "u32";
        },
        {
          name: "chainId";
          type: "string";
        }
      ];
    },
    {
      name: "transferProfit";
      accounts: [
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "treasury";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasuryToken";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasuryData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "profit";
          isMut: true;
          isSigner: false;
        },
        {
          name: "transferProfit";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposal";
          isMut: true;
          isSigner: false;
        },
        {
          name: "profitToken";
          isMut: true;
          isSigner: false;
        },
        {
          name: "memberData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "withdrawalAmount";
          type: "u64";
        }
      ];
    },
    {
      name: "createWithdrawalGovernance";
      accounts: [
        {
          name: "splGovernanceProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "realm";
          isMut: true;
          isSigner: false;
        },
        {
          name: "realmConfig";
          isMut: true;
          isSigner: false;
        },
        {
          name: "realmAuthority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "tokenOwnerRecord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "governance";
          isMut: true;
          isSigner: false;
        },
        {
          name: "voterWeightRecord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasuryData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "memberData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "clubData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vault";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "treasuryIndex";
          type: "u32";
        },
        {
          name: "maxVotingTime";
          type: "u32";
        },
        {
          name: "voteThresholdPercentage";
          type: "u8";
        }
      ];
    },
    {
      name: "castNftVote";
      accounts: [
        {
          name: "realm";
          isMut: false;
          isSigner: false;
        },
        {
          name: "voterWeightRecord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "memberData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "proposal";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "initializeStaking";
      accounts: [
        {
          name: "clubData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "memberData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "stakedTokens";
          isMut: true;
          isSigner: false;
        },
        {
          name: "stakeConfig";
          isMut: true;
          isSigner: false;
        },
        {
          name: "unqMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "stakeName";
          type: "string";
        },
        {
          name: "capAmount";
          type: "u64";
        },
        {
          name: "stakePeriod";
          type: "u8";
        }
      ];
    },
    {
      name: "stakeTokens";
      accounts: [
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "memberData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "stakeConfig";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "stakeIndex";
          type: "u32";
        },
        {
          name: "amount";
          type: "u64";
        },
        {
          name: "stakeOption";
          type: "u8";
        }
      ];
    },
    {
      name: "claimStakedTokens";
      accounts: [
        {
          name: "clubData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "memberData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "stakeConfig";
          isMut: true;
          isSigner: false;
        },
        {
          name: "stakedTokens";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "memberTokens";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "stakeIndex";
          type: "u32";
        },
        {
          name: "stakeOption";
          type: "u8";
        }
      ];
    },
    {
      name: "unstakeTokens";
      accounts: [
        {
          name: "clubData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "memberData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "stakeConfig";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "stakeIndex";
          type: "u32";
        },
        {
          name: "stakeOption";
          type: "u8";
        }
      ];
    },
    {
      name: "finishStaking";
      accounts: [
        {
          name: "clubData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "memberData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "stakedTokens";
          isMut: true;
          isSigner: false;
        },
        {
          name: "stakeConfig";
          isMut: true;
          isSigner: false;
        },
        {
          name: "clubUnqTokens";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "stakeIndex";
          type: "u32";
        }
      ];
    },
    {
      name: "startStaking";
      accounts: [
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "memberData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "stakedTokens";
          isMut: false;
          isSigner: false;
        },
        {
          name: "stakeConfig";
          isMut: true;
          isSigner: false;
        },
        {
          name: "unqMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "stakeIndex";
          type: "u32";
        }
      ];
    },
    {
      name: "initializeStakingReward";
      accounts: [
        {
          name: "clubUnqTokens";
          isMut: true;
          isSigner: false;
        },
        {
          name: "unqMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "updateProposalDescription";
      accounts: [
        {
          name: "proposal";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proposalMetadata";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        }
      ];
      args: [
        {
          name: "descriptionBuffer";
          type: "string";
        },
        {
          name: "name";
          type: "string";
        },
        {
          name: "options";
          type: {
            vec: "string";
          };
        },
        {
          name: "discussionLink";
          type: "string";
        }
      ];
    },
    {
      name: "createMeBuyNowProposal";
      accounts: [
        {
          name: "governance";
          isMut: true;
          isSigner: false;
        },
        {
          name: "realm";
          isMut: true;
          isSigner: false;
        },
        {
          name: "realmConfig";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proposal";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposalTransactionAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenOwnerRecord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "splGovernanceProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "communityTokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "voterWeightRecord";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasuryData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proposalMetadata";
          isMut: false;
          isSigner: false;
        },
        {
          name: "magicEdenData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "useDeny";
          type: "bool";
        }
      ];
    },
    {
      name: "createMeSellProposal";
      accounts: [
        {
          name: "governance";
          isMut: true;
          isSigner: false;
        },
        {
          name: "realm";
          isMut: true;
          isSigner: false;
        },
        {
          name: "realmConfig";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proposal";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposalTransactionAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenOwnerRecord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "splGovernanceProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "communityTokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "voterWeightRecord";
          isMut: false;
          isSigner: false;
        },
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasuryData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: false;
          isSigner: false;
        },
        {
          name: "vault";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proposalMetadata";
          isMut: false;
          isSigner: false;
        },
        {
          name: "magicEdenData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "useDeny";
          type: "bool";
        }
      ];
    },
    {
      name: "executeMeBuyNowTransaction";
      accounts: [
        {
          name: "governance";
          isMut: true;
          isSigner: false;
        },
        {
          name: "realm";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposal";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposalTransaction";
          isMut: true;
          isSigner: false;
        },
        {
          name: "splGovernanceProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "escrowProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proposalMetadata";
          isMut: true;
          isSigner: false;
        },
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: true;
          isSigner: false;
        },
        {
          name: "offer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "unqEscrowTokens";
          isMut: true;
          isSigner: false;
        },
        {
          name: "magicEdenEscrowedTokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "executeMeSellTransaction";
      accounts: [
        {
          name: "governance";
          isMut: true;
          isSigner: false;
        },
        {
          name: "realm";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposal";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposalTransaction";
          isMut: true;
          isSigner: false;
        },
        {
          name: "splGovernanceProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "escrowProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposalMetadata";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vault";
          isMut: false;
          isSigner: false;
        },
        {
          name: "offer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "nativeMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "makerWantedToken";
          isMut: false;
          isSigner: false;
        },
        {
          name: "unqEscrowTokens";
          isMut: true;
          isSigner: false;
        },
        {
          name: "magicEdenEscrowedTokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "executeMeBuyNow";
      accounts: [
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasuryData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "escrowProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "offer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "magicEdenAccountsHolder";
          isMut: true;
          isSigner: false;
        },
        {
          name: "sellersWallet";
          isMut: true;
          isSigner: false;
        },
        {
          name: "magicEdenExerchina";
          isMut: false;
          isSigner: false;
        },
        {
          name: "magicEdenEscrowedToken";
          isMut: true;
          isSigner: false;
        },
        {
          name: "magicEdenEscrowedTokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "magicEdenEscrowedTokenMetadata";
          isMut: false;
          isSigner: false;
        },
        {
          name: "magicEdenState1";
          isMut: true;
          isSigner: false;
        },
        {
          name: "escrowedWantedToken";
          isMut: true;
          isSigner: false;
        },
        {
          name: "autExer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "e8cExer";
          isMut: false;
          isSigner: false;
        },
        {
          name: "expoitExer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "magicEdenState2";
          isMut: true;
          isSigner: false;
        },
        {
          name: "magicEdenState3";
          isMut: true;
          isSigner: false;
        },
        {
          name: "onebwExer";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        },
        {
          name: "magicEden";
          isMut: false;
          isSigner: false;
        },
        {
          name: "unqEscrowToken";
          isMut: true;
          isSigner: false;
        },
        {
          name: "account13";
          isMut: true;
          isSigner: false;
        },
        {
          name: "account15";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "data1";
          type: "bytes";
        },
        {
          name: "data2";
          type: "bytes";
        },
        {
          name: "data3";
          type: "bytes";
        }
      ];
    },
    {
      name: "executeMeSell";
      accounts: [
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasuryData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "escrowProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "vault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "offer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "meState0";
          isMut: true;
          isSigner: false;
        },
        {
          name: "offeredNftToken";
          isMut: true;
          isSigner: false;
        },
        {
          name: "nftMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "nftMetadata";
          isMut: false;
          isSigner: false;
        },
        {
          name: "magicEdenExerchina";
          isMut: false;
          isSigner: false;
        },
        {
          name: "autExer";
          isMut: false;
          isSigner: false;
        },
        {
          name: "e8cExer";
          isMut: false;
          isSigner: false;
        },
        {
          name: "magicEdenState1";
          isMut: true;
          isSigner: false;
        },
        {
          name: "magicEdenState2";
          isMut: false;
          isSigner: false;
        },
        {
          name: "onebwExer";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        },
        {
          name: "magicEden";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "data";
          type: "bytes";
        }
      ];
    },
    {
      name: "executeMeSellCancel";
      accounts: [
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "offer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "offeredNftToken";
          isMut: true;
          isSigner: false;
        },
        {
          name: "nftMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "escrowProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "magicEdenExerchina";
          isMut: false;
          isSigner: false;
        },
        {
          name: "autExer";
          isMut: false;
          isSigner: false;
        },
        {
          name: "e8cExer";
          isMut: false;
          isSigner: false;
        },
        {
          name: "magicEdenState1";
          isMut: true;
          isSigner: false;
        },
        {
          name: "magicEdenState2";
          isMut: false;
          isSigner: false;
        },
        {
          name: "onebwExer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "magicEden";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "data";
          type: "bytes";
        }
      ];
    },
    {
      name: "createFinancialOffer";
      accounts: [
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "memberData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "financialOffer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "financialRecord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasuryData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amountOfRights";
          type: "u64";
        },
        {
          name: "price";
          type: "u64";
        },
        {
          name: "buyer";
          type: {
            option: "publicKey";
          };
        }
      ];
    },
    {
      name: "cancelFinancialOffer";
      accounts: [
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "treasuryData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: false;
          isSigner: false;
        },
        {
          name: "financialRecord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "financialOffer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "acceptFinancialOffer";
      accounts: [
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "memberData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "seller";
          isMut: true;
          isSigner: false;
        },
        {
          name: "financialOffer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasuryData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: false;
          isSigner: false;
        },
        {
          name: "buyerFinancialRecord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "sellerFinancialRecord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amountToBuy";
          type: "u64";
        }
      ];
    },
    {
      name: "changesForFinancialsTrading";
      accounts: [
        {
          name: "treasuryData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "reallocSpace";
      accounts: [
        {
          name: "accountInfo";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "additionalBytes";
          type: "u32";
        }
      ];
    },
    {
      name: "createTransferProposal";
      accounts: [
        {
          name: "governance";
          isMut: true;
          isSigner: false;
        },
        {
          name: "realm";
          isMut: true;
          isSigner: false;
        },
        {
          name: "realmConfig";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proposal";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposalTransactionAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenOwnerRecord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "splGovernanceProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "communityTokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "voterWeightRecord";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasuryData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proposalMetadata";
          isMut: false;
          isSigner: false;
        },
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "offer";
          isMut: false;
          isSigner: false;
        },
        {
          name: "destination";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasuryToken";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "useDeny";
          type: "bool";
        },
        {
          name: "transferAmount";
          type: "u64";
        }
      ];
    },
    {
      name: "executeTransferProposal";
      accounts: [
        {
          name: "governance";
          isMut: true;
          isSigner: false;
        },
        {
          name: "realm";
          isMut: true;
          isSigner: false;
        },
        {
          name: "realmConfig";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposal";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposalMetadata";
          isMut: false;
          isSigner: false;
        },
        {
          name: "splGovernanceProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "treasury";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasuryToken";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasuryData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proposalTransaction";
          isMut: true;
          isSigner: false;
        },
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "offer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenLedger";
          isMut: true;
          isSigner: false;
        },
        {
          name: "ledgerEntry";
          isMut: true;
          isSigner: false;
        },
        {
          name: "destination";
          isMut: true;
          isSigner: false;
        },
        {
          name: "escrowProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "createTransferGovernance";
      accounts: [
        {
          name: "splGovernanceProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "realm";
          isMut: true;
          isSigner: false;
        },
        {
          name: "realmConfig";
          isMut: true;
          isSigner: false;
        },
        {
          name: "realmAuthority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "tokenOwnerRecord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "governance";
          isMut: true;
          isSigner: false;
        },
        {
          name: "voterWeightRecord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasuryData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "memberData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "clubData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "governedAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "maxVotingTime";
          type: "u32";
        },
        {
          name: "voteThresholdPercentage";
          type: "u8";
        }
      ];
    },
    {
      name: "financialRecordReduction";
      accounts: [
        {
          name: "accountInfo";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "updateGovernanceConfig";
      accounts: [
        {
          name: "realm";
          isMut: true;
          isSigner: false;
        },
        {
          name: "governance";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "memberData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasuryData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "realmConfig";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proposal";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenOwnerRecord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposalMetadata";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposalTransaction";
          isMut: true;
          isSigner: false;
        },
        {
          name: "communityTokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "voterWeightRecord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "splGovernance";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "newQuorum";
          type: "bytes";
        },
        {
          name: "seeds";
          type: {
            vec: {
              vec: "bytes";
            };
          };
        },
        {
          name: "newVotingTime";
          type: {
            option: "u32";
          };
        }
      ];
    },
    {
      name: "executeUpdateGovernanceConfig";
      accounts: [
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "realm";
          isMut: false;
          isSigner: false;
        },
        {
          name: "governance";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposal";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposalMetadata";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasuryData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposalTransaction";
          isMut: true;
          isSigner: false;
        },
        {
          name: "splGovernanceProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "createUpdateRoleProposal";
      accounts: [
        {
          name: "realm";
          isMut: true;
          isSigner: false;
        },
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proposal";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposalTransaction";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasuryData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "memberData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "communityMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenOwnerRecord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "voterWeightRecord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "governance";
          isMut: true;
          isSigner: false;
        },
        {
          name: "realmConfig";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proposalMetadata";
          isMut: true;
          isSigner: false;
        },
        {
          name: "escrowProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "splGovernanceProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "roleWeigthConfig";
          type: {
            vec: {
              defined: "UpdateRoleWeight";
            };
          };
        }
      ];
    },
    {
      name: "executeUpdateRole";
      accounts: [
        {
          name: "clubData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "realm";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proposal";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasuryData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proposalTransaction";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposalMetadata";
          isMut: true;
          isSigner: false;
        },
        {
          name: "governance";
          isMut: true;
          isSigner: false;
        },
        {
          name: "escrowProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "splGovernanceProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "createChangeClubConfigGovernance";
      accounts: [
        {
          name: "realm";
          isMut: false;
          isSigner: false;
        },
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "memberData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasuryData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "governance";
          isMut: false;
          isSigner: false;
        },
        {
          name: "realmConfig";
          isMut: false;
          isSigner: false;
        },
        {
          name: "realmAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "voterWeightRecord";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenOwnerRecord";
          isMut: false;
          isSigner: false;
        },
        {
          name: "goverenedAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "splGovernanceProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "voteThreshold";
          type: "u8";
        },
        {
          name: "maxVotingTime";
          type: "u32";
        }
      ];
    },
    {
      name: "createSolseaProposal";
      accounts: [
        {
          name: "realm";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposal";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposalTransaction";
          isMut: true;
          isSigner: false;
        },
        {
          name: "offer";
          isMut: false;
          isSigner: false;
        },
        {
          name: "escrowWantedToken";
          isMut: false;
          isSigner: false;
        },
        {
          name: "realmConfig";
          isMut: false;
          isSigner: false;
        },
        {
          name: "makerWantedToken";
          isMut: false;
          isSigner: false;
        },
        {
          name: "offeredTokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "wantedTokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "governance";
          isMut: true;
          isSigner: false;
        },
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proposalMetadata";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "memberData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "communityTokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasuryData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenOwnerRecord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "escrowProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "voterWeightRecord";
          isMut: true;
          isSigner: false;
        },
        {
          name: "splGovernance";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "treasuryIndex";
          type: "u32";
        },
        {
          name: "chainId";
          type: "string";
        },
        {
          name: "offeredAmount";
          type: "u64";
        },
        {
          name: "wantedAmount";
          type: "u64";
        },
        {
          name: "sellerFeeBps";
          type: "u16";
        },
        {
          name: "useDeny";
          type: "bool";
        },
        {
          name: "action";
          type: "u8";
        }
      ];
    },
    {
      name: "executeSolseaTransaction";
      accounts: [
        {
          name: "clubData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "offer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "solseaEscrow";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authorityAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "solseaProfitAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "solseaEscrowTokens";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposalMetadata";
          isMut: true;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: true;
          isSigner: false;
        },
        {
          name: "maker";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposal";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposalTransaction";
          isMut: true;
          isSigner: false;
        },
        {
          name: "memberData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "solseaProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "wantedTokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "offeredTokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "escrowWantedToken";
          isMut: true;
          isSigner: false;
        },
        {
          name: "makerWantedToken";
          isMut: true;
          isSigner: false;
        },
        {
          name: "makerOfferedToken";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "splGovernance";
          isMut: false;
          isSigner: false;
        },
        {
          name: "governance";
          isMut: true;
          isSigner: false;
        },
        {
          name: "profitAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "escrowProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "action";
          type: "u8";
        },
        {
          name: "treasuryIndex";
          type: "u32";
        },
        {
          name: "chainId";
          type: "string";
        },
        {
          name: "authorityBump";
          type: "u8";
        },
        {
          name: "creatorsCount";
          type: {
            option: "u8";
          };
        },
        {
          name: "sellerFeeBps";
          type: {
            option: "u16";
          };
        },
        {
          name: "royalties";
          type: {
            option: {
              array: ["u8", 5];
            };
          };
        }
      ];
    },
    {
      name: "cancelSolseaOffer";
      accounts: [
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "solseaEscrow";
          isMut: true;
          isSigner: false;
        },
        {
          name: "solseaEscrowTokens";
          isMut: true;
          isSigner: false;
        },
        {
          name: "offeredTokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "solseaAuthority";
          isMut: true;
          isSigner: false;
        },
        {
          name: "proposal";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: false;
          isSigner: false;
        },
        {
          name: "offer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "makerOfferedTokens";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "memberData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "escrowProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "solseaProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "chainId";
          type: "string";
        }
      ];
    },
    {
      name: "reserveRights";
      accounts: [
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasuryData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "memberData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: false;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "reservedRights";
          type: {
            defined: "ReservedRights";
          };
        }
      ];
    },
    {
      name: "updateAllocation";
      accounts: [
        {
          name: "clubData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasuryData";
          isMut: true;
          isSigner: false;
        },
        {
          name: "memberData";
          isMut: false;
          isSigner: false;
        },
        {
          name: "fundraiseConfig";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "equal";
          type: {
            option: "u64";
          };
        },
        {
          name: "customAllocations";
          type: {
            option: {
              vec: {
                defined: "CustomAllocation";
              };
            };
          };
        },
        {
          name: "removeAllocation";
          type: {
            option: {
              vec: {
                defined: "CustomAllocation";
              };
            };
          };
        },
        {
          name: "newCap";
          type: {
            option: "u64";
          };
        }
      ];
    }
  ];
  accounts: [
    {
      name: "clubData";
      type: {
        kind: "struct";
        fields: [
          {
            name: "authority";
            type: "publicKey";
          },
          {
            name: "realm";
            type: "publicKey";
          },
          {
            name: "name";
            type: "string";
          },
          {
            name: "slotCreated";
            type: "u64";
          },
          {
            name: "clubType";
            type: "u8";
          },
          {
            name: "roleConfig";
            type: {
              vec: {
                defined: "RoleConfig";
              };
            };
          },
          {
            name: "treasuryCount";
            type: "u32";
          },
          {
            name: "maxVoterWeight";
            type: {
              option: "u64";
            };
          },
          {
            name: "stakeCount";
            type: "u32";
          },
          {
            name: "activeStakeCount";
            type: "u32";
          },
          {
            name: "hasActiveStaking";
            type: "bool";
          },
          {
            name: "numberOfMembers";
            type: "u32";
          },
          {
            name: "defaultRole";
            type: {
              option: "string";
            };
          },
          {
            name: "kycConfig";
            type: {
              option: {
                defined: "KycConfig";
              };
            };
          }
        ];
      };
    },
    {
      name: "clubVault";
      type: {
        kind: "struct";
        fields: [];
      };
    },
    {
      name: "clubVaultData";
      type: {
        kind: "struct";
        fields: [
          {
            name: "chainId";
            type: "string";
          }
        ];
      };
    },
    {
      name: "fundraiseConfig";
      type: {
        kind: "struct";
        fields: [
          {
            name: "treasury";
            type: "publicKey";
          },
          {
            name: "capAmount";
            type: "u64";
          },
          {
            name: "raisedAmount";
            type: "u64";
          },
          {
            name: "isActive";
            type: "bool";
          },
          {
            name: "fundraiseIndex";
            type: "u32";
          },
          {
            name: "allocation";
            type: {
              option: {
                defined: "Allocation";
              };
            };
          }
        ];
      };
    },
    {
      name: "financialRecord";
      type: {
        kind: "struct";
        fields: [
          {
            name: "authority";
            type: "publicKey";
          },
          {
            name: "treasury";
            type: "publicKey";
          },
          {
            name: "sellOffersCount";
            type: "u32";
          },
          {
            name: "listedFinancialRights";
            type: "u64";
          },
          {
            name: "depositRecords";
            type: {
              vec: {
                defined: "DepositRecord";
              };
            };
          }
        ];
      };
    },
    {
      name: "financialRecordOffer";
      type: {
        kind: "struct";
        fields: [
          {
            name: "treasury";
            type: "publicKey";
          },
          {
            name: "financialRecord";
            type: "publicKey";
          },
          {
            name: "amountOfRights";
            type: "u64";
          },
          {
            name: "price";
            type: "u64";
          },
          {
            name: "seller";
            type: "publicKey";
          },
          {
            name: "wantedTokenMint";
            type: {
              option: "publicKey";
            };
          },
          {
            name: "buyer";
            type: {
              option: "publicKey";
            };
          },
          {
            name: "financialIndex";
            type: "u32";
          },
          {
            name: "initialAmountOfRights";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "financialRecordDepricated";
      type: {
        kind: "struct";
        fields: [
          {
            name: "authority";
            type: "publicKey";
          },
          {
            name: "treasury";
            type: "publicKey";
          },
          {
            name: "financialRight";
            type: "u64";
          },
          {
            name: "latestFundraiseIndex";
            type: "u32";
          },
          {
            name: "validFromIndex";
            type: {
              option: "u32";
            };
          },
          {
            name: "sellOffersCount";
            type: "u32";
          },
          {
            name: "listedFinancialAmount";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "magicEdenData";
      type: {
        kind: "struct";
        fields: [
          {
            name: "instruction";
            type: {
              defined: "MagicEdenInstruction";
            };
          },
          {
            name: "data";
            type: {
              vec: "bytes";
            };
          },
          {
            name: "accounts";
            type: {
              vec: "publicKey";
            };
          }
        ];
      };
    },
    {
      name: "maxVoterWeightRecord";
      type: {
        kind: "struct";
        fields: [
          {
            name: "realm";
            type: "publicKey";
          },
          {
            name: "governingTokenMint";
            type: "publicKey";
          },
          {
            name: "maxVoterWeight";
            type: "u64";
          },
          {
            name: "maxVoterWeightExpiry";
            type: {
              option: "u64";
            };
          },
          {
            name: "reserved";
            type: {
              array: ["u8", 8];
            };
          }
        ];
      };
    },
    {
      name: "allowedMemberData";
      type: {
        kind: "struct";
        fields: [
          {
            name: "clubData";
            type: "publicKey";
          },
          {
            name: "memberPubkey";
            type: "publicKey";
          },
          {
            name: "isMember";
            type: "bool";
          },
          {
            name: "status";
            type: "u8";
          },
          {
            name: "role";
            type: "string";
          },
          {
            name: "joinedAt";
            type: "i64";
          },
          {
            name: "joinedAtSlot";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "nftVoteRecord";
      type: {
        kind: "struct";
        fields: [
          {
            name: "proposal";
            type: "publicKey";
          },
          {
            name: "nftMint";
            type: "publicKey";
          },
          {
            name: "governingTokenOwner";
            type: "publicKey";
          }
        ];
      };
    },
    {
      name: "proposalMetadata";
      type: {
        kind: "struct";
        fields: [
          {
            name: "name";
            type: "string";
          },
          {
            name: "options";
            type: {
              vec: "string";
            };
          },
          {
            name: "authority";
            type: "publicKey";
          },
          {
            name: "discussionLink";
            type: "string";
          },
          {
            name: "treasury";
            type: "publicKey";
          },
          {
            name: "currentFundraiseIndex";
            type: "u32";
          },
          {
            name: "totalFinancialPower";
            type: "u64";
          },
          {
            name: "proposal";
            type: "publicKey";
          },
          {
            name: "proposalIndex";
            type: "u32";
          },
          {
            name: "realm";
            type: "publicKey";
          },
          {
            name: "clubData";
            type: "publicKey";
          },
          {
            name: "governance";
            type: "publicKey";
          },
          {
            name: "isCreated";
            type: "bool";
          },
          {
            name: "description";
            type: "string";
          },
          {
            name: "authorityRole";
            type: "string";
          },
          {
            name: "dataPda";
            type: {
              option: "publicKey";
            };
          },
          {
            name: "proposalType";
            type: {
              defined: "ProposalType";
            };
          },
          {
            name: "proposalStatus";
            type: {
              defined: "ProposalStatus";
            };
          },
          {
            name: "approvalQuorumPercentage";
            type: "u8";
          },
          {
            name: "maxVoterWeight";
            type: {
              option: "u64";
            };
          },
          {
            name: "createdAt";
            type: "i64";
          }
        ];
      };
    },
    {
      name: "stakeConfig";
      type: {
        kind: "struct";
        fields: [
          {
            name: "clubData";
            type: "publicKey";
          },
          {
            name: "capAmount";
            type: "u64";
          },
          {
            name: "raisedAmount";
            type: "u64";
          },
          {
            name: "stakePeriodType";
            type: {
              defined: "StakePeriodType";
            };
          },
          {
            name: "stakePeriodEnd";
            type: {
              option: "i64";
            };
          },
          {
            name: "name";
            type: "string";
          },
          {
            name: "rewardPercentage";
            type: "u32";
          },
          {
            name: "status";
            type: {
              defined: "StakeStatus";
            };
          },
          {
            name: "nftStakeRecord";
            type: {
              option: {
                defined: "NftStakeRecord";
              };
            };
          },
          {
            name: "stakeIndex";
            type: "u32";
          }
        ];
      };
    },
    {
      name: "stakeRecord";
      type: {
        kind: "struct";
        fields: [
          {
            name: "stakeOwner";
            type: "publicKey";
          },
          {
            name: "amount";
            type: "u64";
          },
          {
            name: "hasClaimed";
            type: "bool";
          },
          {
            name: "claimAmount";
            type: "u64";
          },
          {
            name: "hasUnstaked";
            type: "bool";
          },
          {
            name: "unstakePeriodEnd";
            type: {
              option: "i64";
            };
          }
        ];
      };
    },
    {
      name: "transferProfitData";
      type: {
        kind: "struct";
        fields: [
          {
            name: "treasury";
            type: "publicKey";
          },
          {
            name: "treasuryData";
            type: "publicKey";
          },
          {
            name: "treasuryToken";
            type: "publicKey";
          },
          {
            name: "proposal";
            type: "publicKey";
          },
          {
            name: "slotExpiry";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "clubTreasury";
      type: {
        kind: "struct";
        fields: [];
      };
    },
    {
      name: "treasuryData";
      type: {
        kind: "struct";
        fields: [
          {
            name: "fundraiseCount";
            type: "u32";
          },
          {
            name: "treasury";
            type: "publicKey";
          },
          {
            name: "hasActiveFundraise";
            type: "bool";
          },
          {
            name: "governance";
            type: "publicKey";
          },
          {
            name: "maxVoterWeight";
            type: "u64";
          },
          {
            name: "totalFinancialPower";
            type: "u64";
          },
          {
            name: "denominatedCurrency";
            type: {
              option: "publicKey";
            };
          },
          {
            name: "financialTokenAccount";
            type: {
              option: "publicKey";
            };
          },
          {
            name: "sellPermission";
            type: {
              array: [
                {
                  defined: "SellPermission";
                },
                10
              ];
            };
          },
          {
            name: "withdrawalGovernance";
            type: {
              option: "publicKey";
            };
          },
          {
            name: "financialRecordCount";
            type: "u32";
          },
          {
            name: "treasuryIndex";
            type: "u32";
          },
          {
            name: "financialOffersCount";
            type: "u32";
          },
          {
            name: "transferGovernance";
            type: {
              option: "publicKey";
            };
          },
          {
            name: "changeClubConfigGovernance";
            type: {
              option: "publicKey";
            };
          },
          {
            name: "hasActiveUpdateGovernanceConfig";
            type: "bool";
          },
          {
            name: "clubData";
            type: "publicKey";
          },
          {
            name: "reservedRights";
            type: {
              option: {
                defined: "ReservedRights";
              };
            };
          }
        ];
      };
    },
    {
      name: "universeMetadata";
      type: {
        kind: "struct";
        fields: [
          {
            name: "discriminator";
            type: {
              array: ["u8", 8];
            };
          },
          {
            name: "authority";
            type: "publicKey";
          },
          {
            name: "candyMachine";
            type: "publicKey";
          },
          {
            name: "mint";
            type: "publicKey";
          },
          {
            name: "mintingEpoch";
            type: "u64";
          },
          {
            name: "currentUniverseLevel";
            type: "u32";
          },
          {
            name: "status";
            type: "u8";
          },
          {
            name: "rarity";
            type: "u8";
          },
          {
            name: "evolutionPoints";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "voterWeightRecord";
      type: {
        kind: "struct";
        fields: [
          {
            name: "realm";
            type: "publicKey";
          },
          {
            name: "governingTokenMint";
            type: "publicKey";
          },
          {
            name: "governingTokenOwner";
            type: "publicKey";
          },
          {
            name: "voterWeight";
            type: "u64";
          },
          {
            name: "voterWeightExpiry";
            type: {
              option: "u64";
            };
          },
          {
            name: "weightAction";
            type: {
              option: {
                defined: "VoterWeightAction";
              };
            };
          },
          {
            name: "weightActionTarget";
            type: {
              option: "publicKey";
            };
          },
          {
            name: "reserved";
            type: {
              array: ["u8", 8];
            };
          }
        ];
      };
    },
    {
      name: "withdrawal";
      type: {
        kind: "struct";
        fields: [];
      };
    },
    {
      name: "withdrawalData";
      type: {
        kind: "struct";
        fields: [
          {
            name: "realm";
            type: "publicKey";
          },
          {
            name: "clubData";
            type: "publicKey";
          },
          {
            name: "treasury";
            type: "publicKey";
          },
          {
            name: "proposal";
            type: "publicKey";
          },
          {
            name: "fundraiseNumber";
            type: "u32";
          },
          {
            name: "withdrawalAmount";
            type: "u64";
          },
          {
            name: "amountWithdrawn";
            type: "u64";
          },
          {
            name: "totalFinancialPower";
            type: "u64";
          },
          {
            name: "withdrawalMint";
            type: "publicKey";
          },
          {
            name: "proposalCreatedAt";
            type: "i64";
          }
        ];
      };
    }
  ];
  types: [
    {
      name: "RoleConfig";
      type: {
        kind: "struct";
        fields: [
          {
            name: "name";
            type: "string";
          },
          {
            name: "roleWeight";
            type: "u64";
          },
          {
            name: "clubActions";
            type: {
              vec: {
                defined: "ClubAction";
              };
            };
          },
          {
            name: "membersCount";
            type: "u32";
          }
        ];
      };
    },
    {
      name: "KycConfig";
      type: {
        kind: "struct";
        fields: [
          {
            name: "required";
            type: "bool";
          },
          {
            name: "location";
            type: {
              defined: "KycLocation";
            };
          }
        ];
      };
    },
    {
      name: "RolesDto";
      type: {
        kind: "struct";
        fields: [
          {
            name: "name";
            type: "string";
          },
          {
            name: "roleWeight";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "UpdateRoleWeight";
      type: {
        kind: "struct";
        fields: [
          {
            name: "role";
            type: "string";
          },
          {
            name: "currentWeight";
            type: "u64";
          },
          {
            name: "updateWeight";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "Allocation";
      type: {
        kind: "struct";
        fields: [
          {
            name: "equal";
            type: {
              option: "u64";
            };
          },
          {
            name: "custom";
            type: {
              option: {
                vec: {
                  defined: "CustomAllocation";
                };
              };
            };
          }
        ];
      };
    },
    {
      name: "CustomAllocation";
      type: {
        kind: "struct";
        fields: [
          {
            name: "authority";
            type: "publicKey";
          },
          {
            name: "amount";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "DepositRecord";
      type: {
        kind: "struct";
        fields: [
          {
            name: "accumulatedAmount";
            type: "u64";
          },
          {
            name: "fundraiseIndex";
            type: "u32";
          },
          {
            name: "depositedAt";
            type: "i64";
          },
          {
            name: "currentFundraiseDeposit";
            type: "u64";
          },
          {
            name: "tradedRight";
            type: {
              option: {
                vec: {
                  defined: "TradedRight";
                };
              };
            };
          }
        ];
      };
    },
    {
      name: "TradedRight";
      type: {
        kind: "struct";
        fields: [
          {
            name: "amount";
            type: "u64";
          },
          {
            name: "timestamp";
            type: "i64";
          },
          {
            name: "tradeType";
            type: {
              defined: "TradedRightType";
            };
          }
        ];
      };
    },
    {
      name: "Order";
      type: {
        kind: "struct";
        fields: [
          {
            name: "amount";
            type: "u64";
          },
          {
            name: "mint";
            type: "publicKey";
          },
          {
            name: "slot";
            type: "u64";
          },
          {
            name: "createdAt";
            type: "i64";
          }
        ];
      };
    },
    {
      name: "Offer";
      type: {
        kind: "struct";
        fields: [
          {
            name: "discriminator";
            type: {
              array: ["u8", 8];
            };
          },
          {
            name: "maker";
            type: "publicKey";
          },
          {
            name: "treasury";
            type: "publicKey";
          },
          {
            name: "offeredAmount";
            type: "u64";
          },
          {
            name: "offeredTokenMint";
            type: "publicKey";
          },
          {
            name: "wantedAmount";
            type: "u64";
          },
          {
            name: "wantedTokenMint";
            type: "publicKey";
          },
          {
            name: "tokenLedgerMint";
            type: "publicKey";
          },
          {
            name: "makerWantedToken";
            type: "publicKey";
          },
          {
            name: "escrowedWantedToken";
            type: "publicKey";
          },
          {
            name: "status";
            type: {
              defined: "OfferStatus";
            };
          },
          {
            name: "offerType";
            type: {
              defined: "OfferType";
            };
          },
          {
            name: "dedicatedTaker";
            type: {
              option: "publicKey";
            };
          },
          {
            name: "proposal";
            type: "publicKey";
          },
          {
            name: "sellerFeeBps";
            type: "u16";
          }
        ];
      };
    },
    {
      name: "NftStakeRecord";
      type: {
        kind: "struct";
        fields: [
          {
            name: "nftOwner";
            type: "publicKey";
          },
          {
            name: "tokenAccount";
            type: "publicKey";
          },
          {
            name: "tokenMint";
            type: "publicKey";
          },
          {
            name: "stakedNft";
            type: "publicKey";
          },
          {
            name: "rarity";
            type: {
              defined: "Rarity";
            };
          },
          {
            name: "hasClaimed";
            type: "bool";
          },
          {
            name: "unstakePeriodEnd";
            type: {
              option: "i64";
            };
          }
        ];
      };
    },
    {
      name: "ReservedRights";
      type: {
        kind: "struct";
        fields: [
          {
            name: "totalReservedRights";
            type: "u64";
          },
          {
            name: "totalReservedPercentage";
            type: "u32";
          },
          {
            name: "individualRights";
            type: {
              vec: {
                defined: "IndividualRight";
              };
            };
          }
        ];
      };
    },
    {
      name: "IndividualRight";
      type: {
        kind: "struct";
        fields: [
          {
            name: "memberPubkey";
            type: "publicKey";
          },
          {
            name: "rightPercentage";
            type: "u32";
          },
          {
            name: "amountOfRights";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "SellPermission";
      type: {
        kind: "struct";
        fields: [
          {
            name: "from";
            type: "u64";
          },
          {
            name: "to";
            type: "u64";
          },
          {
            name: "quorumMinimum";
            type: "u8";
          },
          {
            name: "decimal";
            type: "u16";
          },
          {
            name: "governance";
            type: "publicKey";
          }
        ];
      };
    },
    {
      name: "SellPermissionDto";
      type: {
        kind: "struct";
        fields: [
          {
            name: "from";
            type: "u64";
          },
          {
            name: "to";
            type: "u64";
          },
          {
            name: "quorumMinimum";
            type: "u8";
          },
          {
            name: "decimal";
            type: "u16";
          }
        ];
      };
    },
    {
      name: "SetGovCfgDto";
      type: {
        kind: "struct";
        fields: [
          {
            name: "config";
            type: {
              vec: {
                defined: "GovernanceConfig";
              };
            };
          },
          {
            name: "seeds";
            type: {
              vec: {
                vec: "bytes";
              };
            };
          }
        ];
      };
    },
    {
      name: "KycError";
      type: {
        kind: "enum";
        variants: [
          {
            name: "KycError";
          },
          {
            name: "IncorrectGatekeeper";
          },
          {
            name: "InvalidOwner";
          },
          {
            name: "InvalidToken";
          },
          {
            name: "InvalidSessionToken";
          },
          {
            name: "TokenRevoked";
          },
          {
            name: "ExpectedRevokedToken";
          },
          {
            name: "InvalidStateChange";
          },
          {
            name: "IncorrectProgramId";
          },
          {
            name: "TokenExpired";
          },
          {
            name: "InvalidGatekeeperAccount";
          }
        ];
      };
    },
    {
      name: "KycLocation";
      type: {
        kind: "enum";
        variants: [
          {
            name: "All";
          },
          {
            name: "OnlyUS";
          },
          {
            name: "NonUS";
          }
        ];
      };
    },
    {
      name: "ClubType";
      type: {
        kind: "enum";
        variants: [
          {
            name: "TokenProportional";
          },
          {
            name: "TokenEqual";
          },
          {
            name: "RoleBased";
          },
          {
            name: "NftBased";
          }
        ];
      };
    },
    {
      name: "ClubVoterWeightAction";
      type: {
        kind: "enum";
        variants: [
          {
            name: "CastVote";
          },
          {
            name: "CommentProposal";
          },
          {
            name: "CreateGovernance";
          },
          {
            name: "CreateProposal";
          },
          {
            name: "SignOffProposal";
          },
          {
            name: "CancelProposal";
          }
        ];
      };
    },
    {
      name: "ClubAction";
      type: {
        kind: "enum";
        variants: [
          {
            name: "CastVote";
          },
          {
            name: "CreateDiscussionProposal";
          },
          {
            name: "CreateTreasuryGovernance";
          },
          {
            name: "CreateWithdrawalGovernance";
          },
          {
            name: "CreateTransferGovernance";
          },
          {
            name: "CreateP2PProposal";
          },
          {
            name: "CreateWithdrawalProposal";
          },
          {
            name: "CreateTransferProposal";
          },
          {
            name: "CreateMeProposal";
          },
          {
            name: "SignOffProposal";
          },
          {
            name: "CancelProposal";
          },
          {
            name: "AllowMember";
          },
          {
            name: "CancelP2POffer";
          },
          {
            name: "CancelInvitation";
          },
          {
            name: "Fundraise";
          },
          {
            name: "Distribute";
          },
          {
            name: "SupportClub";
          },
          {
            name: "UpdateMember";
          },
          {
            name: "InitializeStaking";
          },
          {
            name: "StakeTokens";
          },
          {
            name: "CreateFinancialOffer";
          },
          {
            name: "AcceptFinancialOffer";
          },
          {
            name: "CreateSolseaProposal";
          },
          {
            name: "CreateChangeClubConfigGovernance";
          },
          {
            name: "UpdateGovernanceConfig";
          },
          {
            name: "UpdateRoleConfig";
          },
          {
            name: "AddReservedRights";
          },
          {
            name: "UpdateAllocation";
          }
        ];
      };
    },
    {
      name: "TradedRightType";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Buy";
          },
          {
            name: "Sell";
          },
          {
            name: "BuyReserved";
          },
          {
            name: "SellReserved";
          }
        ];
      };
    },
    {
      name: "ProfitType";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Gain";
          },
          {
            name: "Loss";
          }
        ];
      };
    },
    {
      name: "UpdateAllocationAction";
      type: {
        kind: "enum";
        variants: [
          {
            name: "UpdateCustomAllocation";
          },
          {
            name: "RemoveCustomAllocation";
          },
          {
            name: "UpdateEqual";
          }
        ];
      };
    },
    {
      name: "MagicEdenInstruction";
      type: {
        kind: "enum";
        variants: [
          {
            name: "BuyNow";
          },
          {
            name: "Sell";
          }
        ];
      };
    },
    {
      name: "MemberStatus";
      type: {
        kind: "enum";
        variants: [
          {
            name: "UNINVITED";
          },
          {
            name: "PENDING";
          },
          {
            name: "ACCEPTED";
          },
          {
            name: "REJECTED";
          },
          {
            name: "CANCELED";
          }
        ];
      };
    },
    {
      name: "OfferStatus";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Initialised";
          },
          {
            name: "Accepted";
          },
          {
            name: "Canceled";
          },
          {
            name: "PendingBuyNowExecutionOnMagicEden";
          },
          {
            name: "ExecutedBuyNowOnMagicEden";
          },
          {
            name: "CanceledOnMagic";
          },
          {
            name: "PendingSellExecutionOnMagicEden";
          },
          {
            name: "ExecutedSellOnMagicEden";
          },
          {
            name: "FundsTransfered";
          },
          {
            name: "ListedOnSolsea";
          },
          {
            name: "ExecutedBuyNowOnSolsea";
          },
          {
            name: "CanceledOnSolsea";
          }
        ];
      };
    },
    {
      name: "OfferType";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Buy";
          },
          {
            name: "Sell";
          }
        ];
      };
    },
    {
      name: "ProposalAction";
      type: {
        kind: "enum";
        variants: [
          {
            name: "BuyNFT";
          },
          {
            name: "SellNFT";
          }
        ];
      };
    },
    {
      name: "ProposalType";
      type: {
        kind: "enum";
        variants: [
          {
            name: "BuyP2P";
          },
          {
            name: "SellP2P";
          },
          {
            name: "BuyNowMagicEden";
          },
          {
            name: "SellMagicEden";
          },
          {
            name: "TransferFunds";
          },
          {
            name: "Discussion";
          },
          {
            name: "Withdrawal";
          },
          {
            name: "SellSolsea";
          },
          {
            name: "BuySolsea";
          },
          {
            name: "UpdateGovernanceConfig";
          },
          {
            name: "UpdateRoleConfig";
          }
        ];
      };
    },
    {
      name: "ProposalStatus";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Pending";
          },
          {
            name: "CreatedBuyP2P";
          },
          {
            name: "CreatedSellP2P";
          },
          {
            name: "ExecutedBuyP2P";
          },
          {
            name: "ExecutedSellP2P";
          },
          {
            name: "CreatedBuyNowMagicEden";
          },
          {
            name: "ExecutedBuyNowMagicEden";
          },
          {
            name: "FinishedBuyNowMagicEden";
          },
          {
            name: "CreatedSellMagicEden";
          },
          {
            name: "ExecutedSellMagicEden";
          },
          {
            name: "FinishedSellMagicEden";
          },
          {
            name: "CreatedTransferFunds";
          },
          {
            name: "ExecutedTransferFunds";
          },
          {
            name: "CreatedDiscussion";
          },
          {
            name: "CreatedWithdrawal";
          },
          {
            name: "ExecutedWithdrawal";
          },
          {
            name: "CanceledByOwner";
          },
          {
            name: "CreatedUpdateGovernanceConfig";
          },
          {
            name: "ExecutedUpdateGovernanceConfig";
          },
          {
            name: "CreatedUpdateRoleConfig";
          },
          {
            name: "ExecutedUpdateRoleConfig";
          },
          {
            name: "ExecutedSolseaBuy";
          },
          {
            name: "ExecutedSolseaSell";
          }
        ];
      };
    },
    {
      name: "StakePeriodType";
      type: {
        kind: "enum";
        variants: [
          {
            name: "OneMonth";
          },
          {
            name: "ThreeMonths";
          },
          {
            name: "SixMonths";
          },
          {
            name: "TwelveMonths";
          }
        ];
      };
    },
    {
      name: "StakeStatus";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Funding";
          },
          {
            name: "InProgress";
          },
          {
            name: "Finished";
          },
          {
            name: "Canceled";
          }
        ];
      };
    },
    {
      name: "StakeOption";
      type: {
        kind: "enum";
        variants: [
          {
            name: "FT";
          },
          {
            name: "NFT";
          }
        ];
      };
    },
    {
      name: "UNQNftRarity";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Common";
          },
          {
            name: "Rare";
          },
          {
            name: "Epic";
          },
          {
            name: "Legendary";
          }
        ];
      };
    },
    {
      name: "Rarity";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Common";
          },
          {
            name: "Rare";
          },
          {
            name: "Epic";
          },
          {
            name: "Legendary";
          }
        ];
      };
    },
    {
      name: "VoterWeightAction";
      type: {
        kind: "enum";
        variants: [
          {
            name: "CastVote";
          },
          {
            name: "CommentProposal";
          },
          {
            name: "CreateGovernance";
          },
          {
            name: "CreateProposal";
          },
          {
            name: "SignOffProposal";
          }
        ];
      };
    }
  ];
  events: [
    {
      name: "StakingOpenEvent";
      fields: [
        {
          name: "clubAddress";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "FinanicalOfferOpenEvent";
      fields: [
        {
          name: "clubAddress";
          type: "publicKey";
          index: false;
        },
        {
          name: "financialRecordAddress";
          type: "publicKey";
          index: false;
        },
        {
          name: "seller";
          type: "publicKey";
          index: false;
        },
        {
          name: "treasury";
          type: "publicKey";
          index: false;
        },
        {
          name: "treasuryData";
          type: "publicKey";
          index: false;
        },
        {
          name: "amountOfRights";
          type: "u64";
          index: false;
        }
      ];
    },
    {
      name: "AcceptFinancialOfferEvent";
      fields: [
        {
          name: "clubAddress";
          type: "publicKey";
          index: false;
        },
        {
          name: "financialRecordAddress";
          type: "publicKey";
          index: false;
        },
        {
          name: "buyer";
          type: "publicKey";
          index: false;
        },
        {
          name: "treasury";
          type: "publicKey";
          index: false;
        },
        {
          name: "treasuryData";
          type: "publicKey";
          index: false;
        },
        {
          name: "boughtAmount";
          type: "u64";
          index: false;
        },
        {
          name: "seller";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "FundraiseCreatedEvent";
      fields: [
        {
          name: "clubAddress";
          type: "publicKey";
          index: false;
        },
        {
          name: "cap";
          type: "u64";
          index: false;
        }
      ];
    },
    {
      name: "InvitationEvent";
      fields: [
        {
          name: "clubAddress";
          type: "publicKey";
          index: false;
        },
        {
          name: "invitedMembers";
          type: {
            vec: "publicKey";
          };
          index: false;
        }
      ];
    },
    {
      name: "AcceptOfferEvent";
      fields: [
        {
          name: "proposalAddress";
          type: "publicKey";
          index: false;
        },
        {
          name: "offerAccount";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "CreateProposalEvent";
      fields: [
        {
          name: "realmAddress";
          type: "publicKey";
          index: false;
        },
        {
          name: "proposalAddress";
          type: "publicKey";
          index: false;
        },
        {
          name: "proposalMetadata";
          type: "publicKey";
          index: false;
        },
        {
          name: "clubAddress";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "CastVoteEvent";
      fields: [
        {
          name: "clubAddress";
          type: "publicKey";
          index: false;
        },
        {
          name: "proposal";
          type: "publicKey";
          index: false;
        },
        {
          name: "proposalMetadata";
          type: "publicKey";
          index: false;
        },
        {
          name: "treasuryData";
          type: "publicKey";
          index: false;
        },
        {
          name: "realmAddress";
          type: "publicKey";
          index: false;
        }
      ];
    }
  ];
  errors: [
    {
      code: 6000;
      name: "WrongSplGovProgram";
      msg: "Wrong spl gov id!";
    },
    {
      code: 6001;
      name: "WrongEscrowProgram";
      msg: "Wrong escrow id!";
    },
    {
      code: 6002;
      name: "WrongUNQPubKey";
      msg: "Wrong UNQ mint pub key!";
    },
    {
      code: 6003;
      name: "WrongPermissionLength";
      msg: "Wrong length of Permission config!";
    },
    {
      code: 6004;
      name: "NotAMember";
      msg: "You are not allowed to make deposits!";
    },
    {
      code: 6005;
      name: "InvalidMemberStatus";
      msg: "Invalid member status, valid values are: 0,1,2";
    },
    {
      code: 6006;
      name: "NotEnoughFunds";
      msg: "Not enough funds";
    },
    {
      code: 6007;
      name: "InvalidAuthority";
      msg: "Not a valid authority";
    },
    {
      code: 6008;
      name: "InvalidMint";
      msg: "Invalid mint provided";
    },
    {
      code: 6009;
      name: "InvalidPerformanceFeeConfig";
      msg: "Performance fee configuration is invalid!";
    },
    {
      code: 6010;
      name: "TimeInPast";
      msg: "Time in past";
    },
    {
      code: 6011;
      name: "StartAfterTheEndTime";
      msg: "Start after end time";
    },
    {
      code: 6012;
      name: "FundraiseInvalidAmount";
      msg: "Invalid fundraise amount";
    },
    {
      code: 6013;
      name: "FundraiseAmountAlreadyMet";
      msg: "Fundraise amount already met";
    },
    {
      code: 6014;
      name: "FundraiseHasEnded";
      msg: "Fundraise has ended";
    },
    {
      code: 6015;
      name: "FundraiseStillInProgress";
      msg: "Fundraise still in progress";
    },
    {
      code: 6016;
      name: "InvalidClubTypeStatus";
      msg: "Invalid club type, valid values are: 0,1,2,3";
    },
    {
      code: 6017;
      name: "InvalidGovernance";
      msg: "Invalid governance address";
    },
    {
      code: 6018;
      name: "SellPermissionNotSatisfied";
      msg: "Sell permission not satisfied";
    },
    {
      code: 6019;
      name: "InvalidCancelAuthority";
      msg: "You do not have the permission to cancel this invitation";
    },
    {
      code: 6020;
      name: "InvalidTreasury";
      msg: "Invalid treasury address";
    },
    {
      code: 6021;
      name: "InvalidRole";
      msg: "Invalid role to perform this action";
    },
    {
      code: 6022;
      name: "InvalidVoterWeightAction";
      msg: "Invalid voter weight action";
    },
    {
      code: 6023;
      name: "VoterWeightActionNotAllowed";
      msg: "Voter weight action not allowed";
    },
    {
      code: 6024;
      name: "BelowMinimumVoteTreshold";
      msg: "Below minimum vote treshold";
    },
    {
      code: 6025;
      name: "BelowMinimumVoteTime";
      msg: "Below minimum vote time";
    },
    {
      code: 6026;
      name: "MemberKeysMissmatch";
      msg: "Member data PDA sent doesn't match the one generated on Solana";
    },
    {
      code: 6027;
      name: "MemberAlreadyExists";
      msg: "Member data PDA has already been initialized";
    },
    {
      code: 6028;
      name: "InvalidProposalAction";
      msg: "Invalid proposal action";
    },
    {
      code: 6029;
      name: "VoteNotAllowed";
      msg: "Member not allowed to vote on this proposal";
    },
    {
      code: 6030;
      name: "MaxOrProposalRemainingAccountsMissing";
      msg: "Max Voter Weight Record and Proposal need to be passed as remaining accounts to cast a vote";
    },
    {
      code: 6031;
      name: "WrongProposalAddress";
      msg: "Wrong proposal account passed as remaining account";
    },
    {
      code: 6032;
      name: "WrongMaxVoterWeightRecord";
      msg: "Wrong MaxVoterWeightRecord account passed as remaining account";
    },
    {
      code: 6033;
      name: "InvalidVoterWeightProgram";
      msg: "Invalid voter weight program id";
    },
    {
      code: 6034;
      name: "WrongFundraiseConfig";
      msg: "Wrong fundraise config";
    },
    {
      code: 6035;
      name: "FundraiseRemainingAccountMissing";
      msg: "Fundraise config needs to be passed as remaining account";
    },
    {
      code: 6036;
      name: "InvalidAuthorityToCreateGovernance";
      msg: "Invalid authority to create governance: Only owner of the club can create governance!";
    },
    {
      code: 6037;
      name: "GovernanceCreationAfterFundraise";
      msg: "The governance over treasury must be defined before the fundraise";
    },
    {
      code: 6038;
      name: "WrongGovernanceAccount";
      msg: "Wrong or uninitialized governance account provided to create_fundraise ix";
    },
    {
      code: 6039;
      name: "ProposalAlreadyInitialized";
      msg: "Proposal aready initialized";
    },
    {
      code: 6040;
      name: "ProposalMetadataLengthOverflow";
      msg: "Proposal metadata string length overflow";
    },
    {
      code: 6041;
      name: "FundraiseAmountExceeded";
      msg: "Fundraise amount exceeded";
    },
    {
      code: 6042;
      name: "InvalidNftAccount";
      msg: "Invalid NFT account provided";
    },
    {
      code: 6043;
      name: "NftNotOnTheProvidedAccount";
      msg: "Invalid NFT account provided";
    },
    {
      code: 6044;
      name: "CollectionMustBeVerified";
      msg: "Collection must be verified";
    },
    {
      code: 6045;
      name: "CollectionMissing";
      msg: "Collection missing";
    },
    {
      code: 6046;
      name: "InvalidAccountOwner";
      msg: "Invalid account owner";
    },
    {
      code: 6047;
      name: "InvalidTokenMetadataAccount";
      msg: "Invalid token metadata account";
    },
    {
      code: 6048;
      name: "TokenMetadataDoesNotMatch";
      msg: "Token metadata does not match";
    },
    {
      code: 6049;
      name: "OnlyForNftBasedClubs";
      msg: "Only callable for nft based clubs";
    },
    {
      code: 6050;
      name: "InvalidCollection";
      msg: "Invalid collection";
    },
    {
      code: 6051;
      name: "NftAlreadyVoted";
      msg: "Nft already voted on";
    },
    {
      code: 6052;
      name: "MissingRemainingAccounts";
      msg: "Missing remaining accounts";
    },
    {
      code: 6053;
      name: "ProposalMetadataAlreadyInitialized";
      msg: "Proposal metadata aready initialized";
    },
    {
      code: 6054;
      name: "InvalidSellPermissionGovernanceAccount";
      msg: "Invalid sell permission governance account";
    },
    {
      code: 6055;
      name: "SellPermissionAmountNotSatisfied";
      msg: "Sell permission amount not satisfied";
    },
    {
      code: 6056;
      name: "SellPermissionGovernanceOnlyForBuyAction";
      msg: "Sell permission governance only for Buy action";
    },
    {
      code: 6057;
      name: "AccountClosingErr";
      msg: "Couldn't transfer SOLs from profit_token to profit";
    },
    {
      code: 6058;
      name: "TransferProfitDataExpired";
      msg: "Transfer profit data needs to be updated in the same slot";
    },
    {
      code: 6059;
      name: "WithdrawalGovernanceAlreadyCreated";
      msg: "Withdrawal governance for this club has already been created";
    },
    {
      code: 6060;
      name: "StakingInProgress";
      msg: "Staking already in progress";
    },
    {
      code: 6061;
      name: "InvalidStakeAmount";
      msg: "Invalid stake amount parameter";
    },
    {
      code: 6062;
      name: "InvalidStakeStartDate";
      msg: "Invalid stake start date: Must select current date or future date";
    },
    {
      code: 6063;
      name: "InvalidStakeEndDate";
      msg: "Invalid stake end date: Stake-funding period must last at least one day";
    },
    {
      code: 6064;
      name: "StakeCapOverflow";
      msg: "Stake cap overflow";
    },
    {
      code: 6065;
      name: "NotEnoughUnqTokens";
      msg: "Not Enought UNQ Tokens";
    },
    {
      code: 6066;
      name: "StakingHasntStartedYet";
      msg: "Staking funding period hasn't started yet";
    },
    {
      code: 6067;
      name: "StakingFundingEnded";
      msg: "Staking funding period has ended";
    },
    {
      code: 6068;
      name: "UnstakePeriodHasntEnded";
      msg: "Unstake period is three weeks, and it hasn't ended";
    },
    {
      code: 6069;
      name: "StakingWillBeOver";
      msg: "Staking will be over by the time, unstaking period has ended";
    },
    {
      code: 6070;
      name: "InvalidDepositAmount";
      msg: "Invalid deposit amount";
    },
    {
      code: 6071;
      name: "MaxNumberOfFinancialRecordsExceeded";
      msg: "Cannot support with less than 1 tokens";
    },
    {
      code: 6072;
      name: "MaxNumberOfActiveStakeRecords";
      msg: "Exceeds max number of active stakes";
    },
    {
      code: 6073;
      name: "MaxStakeNameExceeded";
      msg: "Max stake name exceeded";
    },
    {
      code: 6074;
      name: "MaxCapExceeded";
      msg: "Max cap exceeded!";
    },
    {
      code: 6075;
      name: "StakingCanceled";
      msg: "Staking canceled!";
    },
    {
      code: 6076;
      name: "AlreadyUnstaked";
      msg: "Already unstaked!";
    },
    {
      code: 6077;
      name: "CannotClaimBeforeFundingPeriodIsOver";
      msg: "Cannot claim before stake funding period is over!";
    },
    {
      code: 6078;
      name: "StakePeriodHasntEnded";
      msg: "Stake period hasn't ended";
    },
    {
      code: 6079;
      name: "StakeStatusNeedsToBeInProgress";
      msg: "Stake status needs to be InProgress";
    },
    {
      code: 6080;
      name: "WrongRewardTokenAccount";
      msg: "Stake status needs to be InProgress";
    },
    {
      code: 6081;
      name: "NotFundingStatus";
      msg: "StakeConfig must be in Funding status to be changed to InProgress";
    },
    {
      code: 6082;
      name: "SellPermissionConfigFull";
      msg: "Sell permission config full";
    },
    {
      code: 6083;
      name: "WrongProposalUpdateAuthorority";
      msg: "Wrong proposal update authority";
    },
    {
      code: 6084;
      name: "InvalidDepositRecordIndex";
      msg: "The index of DepositRecord seed must be leq than fundraise count at proposal init time";
    },
    {
      code: 6085;
      name: "WrongDepositRecordOwner";
      msg: "The payer of the transaction is not the owner of DepositRecord";
    },
    {
      code: 6086;
      name: "WrongDepositRecordKey";
      msg: "The payer of the transaction is not the owner of DepositRecord";
    },
    {
      code: 6087;
      name: "InvalidMaxAmountPerFundraise";
      msg: "The maximum amount of SOLs per fundraise is 200";
    },
    {
      code: 6088;
      name: "MaxNumberOfMembersExceeded";
      msg: "The maximum amount of members per club is 99";
    },
    {
      code: 6089;
      name: "InvalidMinAmountPerFundraise";
      msg: "The minimum amount of SOLs per fundraise is 200";
    },
    {
      code: 6090;
      name: "WrongOwnerOfTokenAccount";
      msg: "Wrong owner of NFT Token Account";
    },
    {
      code: 6091;
      name: "SpaceAlreadyAllocated";
      msg: "Space already reallocated";
    },
    {
      code: 6092;
      name: "WrongAmountOnTheNftAccount";
      msg: "The amount of token on the NFT Token Account must be 1";
    },
    {
      code: 6093;
      name: "WrongNftMintForStaking";
      msg: "Mint account doesn't match the token account provided for staking";
    },
    {
      code: 6094;
      name: "WrongUniverseMetadataForMint";
      msg: "UniverseMetadata doesn't match the provided mint";
    },
    {
      code: 6095;
      name: "UniverseLevelLow";
      msg: "Universe level too low to stake";
    },
    {
      code: 6096;
      name: "NftStakeAccountInitialized";
      msg: "The PDA of the TokenAccount storing NFT is already initialized";
    },
    {
      code: 6097;
      name: "WrongStakedNftAddress";
      msg: "The PDA of the TokenAccount storing NFT is wrong";
    },
    {
      code: 6098;
      name: "LowerRarity";
      msg: "Universe NFT must be of higher rarity than the one already staked";
    },
    {
      code: 6099;
      name: "NftClaimed";
      msg: "This NFT was already claimed";
    },
    {
      code: 6100;
      name: "WrongStakedTokensAddress";
      msg: "The PDA of the TokenAccount storing NFT is wrong";
    },
    {
      code: 6101;
      name: "CannotTransferOldStakedNft";
      msg: "Failed to transfer old NFT to its owner";
    },
    {
      code: 6102;
      name: "WrongNftReceiverTokenAccount";
      msg: "Wrong NFT receiver TokenAccount passed";
    },
    {
      code: 6103;
      name: "WrongOwnerOfStakedNft";
      msg: "Wrong owner of the staked NFT";
    },
    {
      code: 6104;
      name: "AlreadyClaimed";
      msg: "Already claimed your tokens";
    },
    {
      code: 6105;
      name: "WrongStakeRecordOwner";
      msg: "Wrong stake record owner";
    },
    {
      code: 6106;
      name: "InvalidFinancialRecordAmount";
      msg: "Invalid financial record amount";
    },
    {
      code: 6107;
      name: "WrongCancelFinancialOfferAuthority";
      msg: "Signer has no authority to cancel this financial offer";
    },
    {
      code: 6108;
      name: "WrongFinancialBuyerTokenMint";
      msg: "Wrong financial buyer token mint";
    },
    {
      code: 6109;
      name: "NotEnoughTokensToAcceptFinancialOffer";
      msg: "Not enough tokens to accept financial offer";
    },
    {
      code: 6110;
      name: "CannotCreateFinancialOffer";
      msg: "Cannot create financial offer while a fundraise is active";
    },
    {
      code: 6111;
      name: "NotDesignatedBuyerForFinancialOffer";
      msg: "You are not the designated buyer for this financial offer";
    },
    {
      code: 6112;
      name: "FinancialOffersNotZero";
      msg: "There cannot be any active financial offers when starting a fundraise";
    },
    {
      code: 6113;
      name: "WrongMagicEdenAccountsHolder";
      msg: "Wrong accounts holder for BuyNow on MagicEden";
    },
    {
      code: 6114;
      name: "NoOfferAccountForMagicEden";
      msg: "Wrong PDA passed as offer address for MagicEden BuyNow";
    },
    {
      code: 6115;
      name: "NoWantedTokenMintForMagicEdenBuyNow";
      msg: "Wrong wanted_token_mint passed as remaining account passed as remaining account";
    },
    {
      code: 6116;
      name: "NoEscrowedWantedTokenAccountForMagicEden";
      msg: "Wrong escrowed_wanted_token account passed as remaining account for BuyNow";
    },
    {
      code: 6117;
      name: "NoOfferedTokenMintForMagicEden";
      msg: "No offered_token_mint passed as remaining account";
    },
    {
      code: 6118;
      name: "NoMakerWantedTokenForMagicEden";
      msg: "No maker_wanted_token passed as remaining account";
    },
    {
      code: 6119;
      name: "NoTokenProgramForMagicEden";
      msg: "No token_program passed as remaining account";
    },
    {
      code: 6120;
      name: "InvalidFinancialRightsAmount";
      msg: "Invalid amount of financial rights to buy";
    },
    {
      code: 6121;
      name: "FinancialRightsAmountExceeded";
      msg: "You do not have enough financial rights";
    },
    {
      code: 6122;
      name: "WrongMeBuyNowMaker";
      msg: "This is not the treasury that made this offer";
    },
    {
      code: 6123;
      name: "WrongMeSellMaker";
      msg: "This is not the vault that made this offer";
    },
    {
      code: 6124;
      name: "ProposalToBuyNowNotExecuted";
      msg: "Proposal to buy on magic eden needs to be executed";
    },
    {
      code: 6125;
      name: "ProposalToSellNotExecuted";
      msg: "Proposal to sell on magic eden needs to be executed";
    },
    {
      code: 6126;
      name: "FailedToParseDenominatedCurrencyAsMint";
      msg: "Wrong denominated currency token account mint";
    },
    {
      code: 6127;
      name: "WrongDenominatedCurrencyTokenAccountMint";
      msg: "Wrong denominated currency token account mint";
    },
    {
      code: 6128;
      name: "WrongDenominatedTokenAddress";
      msg: "Wrong denominated token address";
    },
    {
      code: 6129;
      name: "FailedToSupportClub";
      msg: "Failed to support club";
    },
    {
      code: 6130;
      name: "TransferGovernanceAlreadyCreated";
      msg: "Transfer governance for this club has already been created";
    },
    {
      code: 6131;
      name: "InvalidAuthorityToInviteMember";
      msg: "Not a valid authority to invite a member";
    },
    {
      code: 6132;
      name: "InvalidAuthorityToCancelOffer";
      msg: "Invalid authority to cancel P2P offer";
    },
    {
      code: 6133;
      name: "InvalidAuthorityToCreateFundraise";
      msg: "Invalid authority to create fundraise";
    },
    {
      code: 6134;
      name: "InvalidRoleToSupport";
      msg: "Invalid role to perform the support club action";
    },
    {
      code: 6135;
      name: "InvalidAuthorityToFinishStaking";
      msg: "Invalid role to finish staking";
    },
    {
      code: 6136;
      name: "InvalidAuthorityToInitializeStaking";
      msg: "Invalid role to initialize staking";
    },
    {
      code: 6137;
      name: "InvalidAuthorityToUpdateAllocation";
      msg: "Invalid authority to update allocation";
    },
    {
      code: 6138;
      name: "InvalidClubType";
      msg: "Club type not implemented";
    },
    {
      code: 6139;
      name: "InvalidMintOfNftToBuy";
      msg: "The mint of the NFT that the offer was made for is different";
    },
    {
      code: 6140;
      name: "WrongAmountOfOfferedToken";
      msg: "Wrong amount of offered token";
    },
    {
      code: 6141;
      name: "CanNotUpdateGovernanceConfig";
      msg: "Can not update governance with proposals in voting state";
    },
    {
      code: 6142;
      name: "UpdateGovernanceProposalActive";
      msg: "Update governance proposal active";
    },
    {
      code: 6143;
      name: "InvalidProposalState";
      msg: "Invalid proposal state";
    },
    {
      code: 6144;
      name: "ChangeClubConfigGovernanceAlredyCreated";
      msg: "Change club config governance alredy created";
    },
    {
      code: 6145;
      name: "InvalidAuthorityToStartStaking";
      msg: "Invalid role to start staking";
    },
    {
      code: 6146;
      name: "InvalidDepositRecordState";
      msg: "Invalid DepositRecord State";
    },
    {
      code: 6147;
      name: "ReservedRightsCannotBeOverridden";
      msg: "Reserved rights cannot be overridden";
    },
    {
      code: 6148;
      name: "ReservedRightsCannotSetAfterFundraise";
      msg: "Reserved rights cannot be set after fundraise";
    },
    {
      code: 6149;
      name: "WrongTreasuryForClub";
      msg: "Wrong treasury for club";
    },
    {
      code: 6150;
      name: "NotUniqueIndividualRight";
      msg: "Each pubkey for which individual rights is reserved must be unique";
    },
    {
      code: 6151;
      name: "IndividualRightNotExists";
      msg: "Individual right for authority does not exist";
    },
    {
      code: 6152;
      name: "NotEnoughVoteRights";
      msg: "Not enought vote rights to vote on this proposal";
    },
    {
      code: 6153;
      name: "CannotAddAndRemoveAllocation";
      msg: "You cannot add and remove allocation at the same time";
    },
    {
      code: 6154;
      name: "InvalidFundraiseCapAmount";
      msg: "Invalid fundraise cap amount";
    }
  ];
};

export const IDL: ClubProgram = {
  version: "0.2.0",
  name: "club_program",
  instructions: [
    {
      name: "createClub",
      accounts: [
        {
          name: "realm",
          isMut: true,
          isSigner: false,
        },
        {
          name: "ogRealm",
          isMut: false,
          isSigner: false,
        },
        {
          name: "realmAuthority",
          isMut: true,
          isSigner: false,
        },
        {
          name: "communityTokenHoldingAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "realmConfig",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenOwnerRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "splGovernanceProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "voterWeightProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "communityTokenMint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "clubData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "memberData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "clubName",
          type: "string",
        },
        {
          name: "clubType",
          type: "u8",
        },
        {
          name: "roles",
          type: {
            vec: "bytes",
          },
        },
        {
          name: "ownerRole",
          type: "string",
        },
        {
          name: "defaultRole",
          type: {
            option: "string",
          },
        },
        {
          name: "kycConfig",
          type: {
            option: {
              defined: "KycConfig",
            },
          },
        },
      ],
    },
    {
      name: "createClubVault",
      accounts: [
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "memberData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "splGovernanceProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "vaultData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "chainId",
          type: "string",
        },
      ],
    },
    {
      name: "createTreasuryGovernance",
      accounts: [
        {
          name: "splGovernanceProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "realm",
          isMut: false,
          isSigner: false,
        },
        {
          name: "realmConfig",
          isMut: true,
          isSigner: false,
        },
        {
          name: "realmAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenOwnerRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "governance",
          isMut: true,
          isSigner: false,
        },
        {
          name: "voterWeightRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: true,
          isSigner: false,
        },
        {
          name: "profit",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasuryData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "memberData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "clubData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "maxVotingTime",
          type: "u32",
        },
        {
          name: "voteThresholdPercentage",
          type: "u8",
        },
        {
          name: "sellPermissionConfig",
          type: {
            vec: {
              defined: "SellPermissionDto",
            },
          },
        },
        {
          name: "nftMaxVoterWeight",
          type: {
            option: "u64",
          },
        },
      ],
    },
    {
      name: "addSellPermission",
      accounts: [
        {
          name: "splGovernanceProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "realm",
          isMut: false,
          isSigner: false,
        },
        {
          name: "realmConfig",
          isMut: true,
          isSigner: false,
        },
        {
          name: "realmAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenOwnerRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "governance",
          isMut: true,
          isSigner: false,
        },
        {
          name: "governedSpc",
          isMut: true,
          isSigner: false,
        },
        {
          name: "voterWeightRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasuryData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "memberData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "maxVotingTime",
          type: "u32",
        },
        {
          name: "sellPermissionConfig",
          type: {
            defined: "SellPermissionDto",
          },
        },
      ],
    },
    {
      name: "supportClub",
      accounts: [
        {
          name: "realm",
          isMut: false,
          isSigner: false,
        },
        {
          name: "memberData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "fundraiseConfig",
          isMut: true,
          isSigner: false,
        },
        {
          name: "financialRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasuryData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "depositAmount",
          type: "u64",
        },
      ],
    },
    {
      name: "createClubProposal",
      accounts: [
        {
          name: "governance",
          isMut: true,
          isSigner: false,
        },
        {
          name: "realm",
          isMut: true,
          isSigner: false,
        },
        {
          name: "governanceAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "realmConfig",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proposal",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposalTransactionAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenOwnerRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "splGovernanceProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "communityTokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "voterWeightRecord",
          isMut: false,
          isSigner: false,
        },
        {
          name: "offer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "makerOfferedTokens",
          isMut: true,
          isSigner: false,
        },
        {
          name: "escrowedWantedTokens",
          isMut: true,
          isSigner: false,
        },
        {
          name: "makerWantedAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "makerOfferedAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasuryData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proposalMetadata",
          isMut: false,
          isSigner: false,
        },
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "wantedTokensMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "chainId",
          type: "string",
        },
        {
          name: "useDeny",
          type: "bool",
        },
        {
          name: "offeredAmount",
          type: "u64",
        },
        {
          name: "wantedAmount",
          type: "u64",
        },
        {
          name: "action",
          type: "u8",
        },
        {
          name: "dedicatedTaker",
          type: {
            option: "publicKey",
          },
        },
      ],
    },
    {
      name: "allowMember",
      accounts: [
        {
          name: "memberData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "clubData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "roles",
          type: {
            vec: "string",
          },
        },
      ],
    },
    {
      name: "updateMembership",
      accounts: [
        {
          name: "realm",
          isMut: true,
          isSigner: false,
        },
        {
          name: "realmAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "splGovernanceProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "memberAddress",
          isMut: false,
          isSigner: false,
        },
        {
          name: "memberData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "isMember",
          type: "bool",
        },
      ],
    },
    {
      name: "acceptMembership",
      accounts: [
        {
          name: "memberData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "realm",
          isMut: true,
          isSigner: false,
        },
        {
          name: "communityTokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "splGovernanceProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenOwnerRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "clubData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "cancelInvitation",
      accounts: [
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "memberData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "memberAddress",
          isMut: false,
          isSigner: false,
        },
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "recipient",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "createFundraise",
      accounts: [
        {
          name: "memberData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasuryData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: true,
          isSigner: false,
        },
        {
          name: "fundraiseConfig",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "finishFundraise",
      accounts: [
        {
          name: "memberData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasuryData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: true,
          isSigner: false,
        },
        {
          name: "fundraiseConfig",
          isMut: true,
          isSigner: false,
        },
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "updateVoterWeight",
      accounts: [
        {
          name: "realm",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasuryData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "voterWeightRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "memberData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "maxVoterWeightRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposalMetadata",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposal",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "action",
          type: "u8",
        },
      ],
    },
    {
      name: "executeTransaction",
      accounts: [
        {
          name: "governance",
          isMut: true,
          isSigner: false,
        },
        {
          name: "realm",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposal",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposalTransaction",
          isMut: true,
          isSigner: false,
        },
        {
          name: "splGovernanceProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "proposalMetadata",
          isMut: true,
          isSigner: false,
        },
        {
          name: "offer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "makerOfferedTokens",
          isMut: true,
          isSigner: false,
        },
        {
          name: "escrowedWantedTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "maker",
          isMut: true,
          isSigner: false,
        },
        {
          name: "escrowedOfferedTokens",
          isMut: true,
          isSigner: false,
        },
        {
          name: "offeredTokensMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "wantedTokensMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "escrowProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: true,
          isSigner: false,
        },
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "chainId",
          type: "string",
        },
        {
          name: "action",
          type: "u8",
        },
        {
          name: "treasuryIndex",
          type: "u32",
        },
      ],
    },
    {
      name: "cancelEscrow",
      accounts: [
        {
          name: "realm",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "memberData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "offer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "makerOfferedTokens",
          isMut: true,
          isSigner: false,
        },
        {
          name: "maker",
          isMut: true,
          isSigner: false,
        },
        {
          name: "escrowedWantedTokens",
          isMut: true,
          isSigner: false,
        },
        {
          name: "escrowedOfferedTokens",
          isMut: true,
          isSigner: false,
        },
        {
          name: "escrowProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: true,
          isSigner: false,
        },
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proposal",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "chainId",
          type: "string",
        },
        {
          name: "action",
          type: "u8",
        },
        {
          name: "treasuryIndex",
          type: "u32",
        },
      ],
    },
    {
      name: "createProposalMetadata",
      accounts: [
        {
          name: "realm",
          isMut: false,
          isSigner: false,
        },
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proposal",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proposalMetadata",
          isMut: true,
          isSigner: false,
        },
        {
          name: "memberData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "governance",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "treasuryData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "proposalType",
          type: "u8",
        },
        {
          name: "data1",
          type: {
            option: "bytes",
          },
        },
        {
          name: "data2",
          type: {
            option: "bytes",
          },
        },
        {
          name: "data3",
          type: {
            option: "bytes",
          },
        },
      ],
    },
    {
      name: "createWithdrawalProposal",
      accounts: [
        {
          name: "governance",
          isMut: true,
          isSigner: false,
        },
        {
          name: "realm",
          isMut: true,
          isSigner: false,
        },
        {
          name: "realmConfig",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proposal",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposalTransactionAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenOwnerRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "splGovernanceProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "communityTokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "voterWeightRecord",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasuryData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasuryToken",
          isMut: false,
          isSigner: false,
        },
        {
          name: "withdrawal",
          isMut: false,
          isSigner: false,
        },
        {
          name: "withdrawalData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "withdrawalMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proposalMetadata",
          isMut: false,
          isSigner: false,
        },
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "useDeny",
          type: "bool",
        },
        {
          name: "withdrawalAmount",
          type: "u64",
        },
      ],
    },
    {
      name: "executeWithdrawalTransaction",
      accounts: [
        {
          name: "governance",
          isMut: true,
          isSigner: false,
        },
        {
          name: "realm",
          isMut: true,
          isSigner: false,
        },
        {
          name: "realmConfig",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposal",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposalMetadata",
          isMut: false,
          isSigner: false,
        },
        {
          name: "splGovernanceProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "treasury",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasuryToken",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasuryData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "withdrawal",
          isMut: true,
          isSigner: false,
        },
        {
          name: "withdrawalData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "withdrawalMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proposalTransaction",
          isMut: true,
          isSigner: false,
        },
        {
          name: "transferProfitData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "escrowProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "updateVoterWeightForGovernance",
      accounts: [
        {
          name: "realm",
          isMut: false,
          isSigner: false,
        },
        {
          name: "voterWeightRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "memberData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "distribute",
      accounts: [
        {
          name: "clubData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposal",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "offer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "escrowProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenLedger",
          isMut: true,
          isSigner: false,
        },
        {
          name: "ledgerEntry",
          isMut: true,
          isSigner: false,
        },
        {
          name: "profit",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "profitToken",
          isMut: true,
          isSigner: false,
        },
        {
          name: "escrowedWantedToken",
          isMut: true,
          isSigner: false,
        },
        {
          name: "makerWantedToken",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "treasuryIndex",
          type: "u32",
        },
        {
          name: "chainId",
          type: "string",
        },
      ],
    },
    {
      name: "transferProfit",
      accounts: [
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "treasury",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasuryToken",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasuryData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "profit",
          isMut: true,
          isSigner: false,
        },
        {
          name: "transferProfit",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposal",
          isMut: true,
          isSigner: false,
        },
        {
          name: "profitToken",
          isMut: true,
          isSigner: false,
        },
        {
          name: "memberData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "withdrawalAmount",
          type: "u64",
        },
      ],
    },
    {
      name: "createWithdrawalGovernance",
      accounts: [
        {
          name: "splGovernanceProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "realm",
          isMut: true,
          isSigner: false,
        },
        {
          name: "realmConfig",
          isMut: true,
          isSigner: false,
        },
        {
          name: "realmAuthority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenOwnerRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "governance",
          isMut: true,
          isSigner: false,
        },
        {
          name: "voterWeightRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasuryData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "memberData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "clubData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vault",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "treasuryIndex",
          type: "u32",
        },
        {
          name: "maxVotingTime",
          type: "u32",
        },
        {
          name: "voteThresholdPercentage",
          type: "u8",
        },
      ],
    },
    {
      name: "castNftVote",
      accounts: [
        {
          name: "realm",
          isMut: false,
          isSigner: false,
        },
        {
          name: "voterWeightRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "memberData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "proposal",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "initializeStaking",
      accounts: [
        {
          name: "clubData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "memberData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "stakedTokens",
          isMut: true,
          isSigner: false,
        },
        {
          name: "stakeConfig",
          isMut: true,
          isSigner: false,
        },
        {
          name: "unqMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "stakeName",
          type: "string",
        },
        {
          name: "capAmount",
          type: "u64",
        },
        {
          name: "stakePeriod",
          type: "u8",
        },
      ],
    },
    {
      name: "stakeTokens",
      accounts: [
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "memberData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "stakeConfig",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "stakeIndex",
          type: "u32",
        },
        {
          name: "amount",
          type: "u64",
        },
        {
          name: "stakeOption",
          type: "u8",
        },
      ],
    },
    {
      name: "claimStakedTokens",
      accounts: [
        {
          name: "clubData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "memberData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "stakeConfig",
          isMut: true,
          isSigner: false,
        },
        {
          name: "stakedTokens",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "memberTokens",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "stakeIndex",
          type: "u32",
        },
        {
          name: "stakeOption",
          type: "u8",
        },
      ],
    },
    {
      name: "unstakeTokens",
      accounts: [
        {
          name: "clubData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "memberData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "stakeConfig",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "stakeIndex",
          type: "u32",
        },
        {
          name: "stakeOption",
          type: "u8",
        },
      ],
    },
    {
      name: "finishStaking",
      accounts: [
        {
          name: "clubData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "memberData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "stakedTokens",
          isMut: true,
          isSigner: false,
        },
        {
          name: "stakeConfig",
          isMut: true,
          isSigner: false,
        },
        {
          name: "clubUnqTokens",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "stakeIndex",
          type: "u32",
        },
      ],
    },
    {
      name: "startStaking",
      accounts: [
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "memberData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "stakedTokens",
          isMut: false,
          isSigner: false,
        },
        {
          name: "stakeConfig",
          isMut: true,
          isSigner: false,
        },
        {
          name: "unqMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "stakeIndex",
          type: "u32",
        },
      ],
    },
    {
      name: "initializeStakingReward",
      accounts: [
        {
          name: "clubUnqTokens",
          isMut: true,
          isSigner: false,
        },
        {
          name: "unqMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "updateProposalDescription",
      accounts: [
        {
          name: "proposal",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proposalMetadata",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "descriptionBuffer",
          type: "string",
        },
        {
          name: "name",
          type: "string",
        },
        {
          name: "options",
          type: {
            vec: "string",
          },
        },
        {
          name: "discussionLink",
          type: "string",
        },
      ],
    },
    {
      name: "createMeBuyNowProposal",
      accounts: [
        {
          name: "governance",
          isMut: true,
          isSigner: false,
        },
        {
          name: "realm",
          isMut: true,
          isSigner: false,
        },
        {
          name: "realmConfig",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proposal",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposalTransactionAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenOwnerRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "splGovernanceProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "communityTokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "voterWeightRecord",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasuryData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proposalMetadata",
          isMut: false,
          isSigner: false,
        },
        {
          name: "magicEdenData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "useDeny",
          type: "bool",
        },
      ],
    },
    {
      name: "createMeSellProposal",
      accounts: [
        {
          name: "governance",
          isMut: true,
          isSigner: false,
        },
        {
          name: "realm",
          isMut: true,
          isSigner: false,
        },
        {
          name: "realmConfig",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proposal",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposalTransactionAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenOwnerRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "splGovernanceProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "communityTokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "voterWeightRecord",
          isMut: false,
          isSigner: false,
        },
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasuryData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: false,
          isSigner: false,
        },
        {
          name: "vault",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proposalMetadata",
          isMut: false,
          isSigner: false,
        },
        {
          name: "magicEdenData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "useDeny",
          type: "bool",
        },
      ],
    },
    {
      name: "executeMeBuyNowTransaction",
      accounts: [
        {
          name: "governance",
          isMut: true,
          isSigner: false,
        },
        {
          name: "realm",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposal",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposalTransaction",
          isMut: true,
          isSigner: false,
        },
        {
          name: "splGovernanceProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "escrowProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proposalMetadata",
          isMut: true,
          isSigner: false,
        },
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: true,
          isSigner: false,
        },
        {
          name: "offer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "unqEscrowTokens",
          isMut: true,
          isSigner: false,
        },
        {
          name: "magicEdenEscrowedTokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "executeMeSellTransaction",
      accounts: [
        {
          name: "governance",
          isMut: true,
          isSigner: false,
        },
        {
          name: "realm",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposal",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposalTransaction",
          isMut: true,
          isSigner: false,
        },
        {
          name: "splGovernanceProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "escrowProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposalMetadata",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vault",
          isMut: false,
          isSigner: false,
        },
        {
          name: "offer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "nativeMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "makerWantedToken",
          isMut: false,
          isSigner: false,
        },
        {
          name: "unqEscrowTokens",
          isMut: true,
          isSigner: false,
        },
        {
          name: "magicEdenEscrowedTokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "executeMeBuyNow",
      accounts: [
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasuryData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "escrowProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "offer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "magicEdenAccountsHolder",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sellersWallet",
          isMut: true,
          isSigner: false,
        },
        {
          name: "magicEdenExerchina",
          isMut: false,
          isSigner: false,
        },
        {
          name: "magicEdenEscrowedToken",
          isMut: true,
          isSigner: false,
        },
        {
          name: "magicEdenEscrowedTokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "magicEdenEscrowedTokenMetadata",
          isMut: false,
          isSigner: false,
        },
        {
          name: "magicEdenState1",
          isMut: true,
          isSigner: false,
        },
        {
          name: "escrowedWantedToken",
          isMut: true,
          isSigner: false,
        },
        {
          name: "autExer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "e8cExer",
          isMut: false,
          isSigner: false,
        },
        {
          name: "expoitExer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "magicEdenState2",
          isMut: true,
          isSigner: false,
        },
        {
          name: "magicEdenState3",
          isMut: true,
          isSigner: false,
        },
        {
          name: "onebwExer",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
        {
          name: "magicEden",
          isMut: false,
          isSigner: false,
        },
        {
          name: "unqEscrowToken",
          isMut: true,
          isSigner: false,
        },
        {
          name: "account13",
          isMut: true,
          isSigner: false,
        },
        {
          name: "account15",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "data1",
          type: "bytes",
        },
        {
          name: "data2",
          type: "bytes",
        },
        {
          name: "data3",
          type: "bytes",
        },
      ],
    },
    {
      name: "executeMeSell",
      accounts: [
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasuryData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "escrowProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "vault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "offer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "meState0",
          isMut: true,
          isSigner: false,
        },
        {
          name: "offeredNftToken",
          isMut: true,
          isSigner: false,
        },
        {
          name: "nftMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "nftMetadata",
          isMut: false,
          isSigner: false,
        },
        {
          name: "magicEdenExerchina",
          isMut: false,
          isSigner: false,
        },
        {
          name: "autExer",
          isMut: false,
          isSigner: false,
        },
        {
          name: "e8cExer",
          isMut: false,
          isSigner: false,
        },
        {
          name: "magicEdenState1",
          isMut: true,
          isSigner: false,
        },
        {
          name: "magicEdenState2",
          isMut: false,
          isSigner: false,
        },
        {
          name: "onebwExer",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
        {
          name: "magicEden",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "data",
          type: "bytes",
        },
      ],
    },
    {
      name: "executeMeSellCancel",
      accounts: [
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "offer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "offeredNftToken",
          isMut: true,
          isSigner: false,
        },
        {
          name: "nftMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "escrowProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "magicEdenExerchina",
          isMut: false,
          isSigner: false,
        },
        {
          name: "autExer",
          isMut: false,
          isSigner: false,
        },
        {
          name: "e8cExer",
          isMut: false,
          isSigner: false,
        },
        {
          name: "magicEdenState1",
          isMut: true,
          isSigner: false,
        },
        {
          name: "magicEdenState2",
          isMut: false,
          isSigner: false,
        },
        {
          name: "onebwExer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "magicEden",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "data",
          type: "bytes",
        },
      ],
    },
    {
      name: "createFinancialOffer",
      accounts: [
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "memberData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "financialOffer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "financialRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasuryData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amountOfRights",
          type: "u64",
        },
        {
          name: "price",
          type: "u64",
        },
        {
          name: "buyer",
          type: {
            option: "publicKey",
          },
        },
      ],
    },
    {
      name: "cancelFinancialOffer",
      accounts: [
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "treasuryData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: false,
          isSigner: false,
        },
        {
          name: "financialRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "financialOffer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "acceptFinancialOffer",
      accounts: [
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "memberData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "seller",
          isMut: true,
          isSigner: false,
        },
        {
          name: "financialOffer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasuryData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: false,
          isSigner: false,
        },
        {
          name: "buyerFinancialRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sellerFinancialRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amountToBuy",
          type: "u64",
        },
      ],
    },
    {
      name: "changesForFinancialsTrading",
      accounts: [
        {
          name: "treasuryData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "reallocSpace",
      accounts: [
        {
          name: "accountInfo",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "additionalBytes",
          type: "u32",
        },
      ],
    },
    {
      name: "createTransferProposal",
      accounts: [
        {
          name: "governance",
          isMut: true,
          isSigner: false,
        },
        {
          name: "realm",
          isMut: true,
          isSigner: false,
        },
        {
          name: "realmConfig",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proposal",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposalTransactionAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenOwnerRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "splGovernanceProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "communityTokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "voterWeightRecord",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasuryData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proposalMetadata",
          isMut: false,
          isSigner: false,
        },
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "offer",
          isMut: false,
          isSigner: false,
        },
        {
          name: "destination",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasuryToken",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "useDeny",
          type: "bool",
        },
        {
          name: "transferAmount",
          type: "u64",
        },
      ],
    },
    {
      name: "executeTransferProposal",
      accounts: [
        {
          name: "governance",
          isMut: true,
          isSigner: false,
        },
        {
          name: "realm",
          isMut: true,
          isSigner: false,
        },
        {
          name: "realmConfig",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposal",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposalMetadata",
          isMut: false,
          isSigner: false,
        },
        {
          name: "splGovernanceProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "treasury",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasuryToken",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasuryData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proposalTransaction",
          isMut: true,
          isSigner: false,
        },
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "offer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenLedger",
          isMut: true,
          isSigner: false,
        },
        {
          name: "ledgerEntry",
          isMut: true,
          isSigner: false,
        },
        {
          name: "destination",
          isMut: true,
          isSigner: false,
        },
        {
          name: "escrowProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "createTransferGovernance",
      accounts: [
        {
          name: "splGovernanceProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "realm",
          isMut: true,
          isSigner: false,
        },
        {
          name: "realmConfig",
          isMut: true,
          isSigner: false,
        },
        {
          name: "realmAuthority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenOwnerRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "governance",
          isMut: true,
          isSigner: false,
        },
        {
          name: "voterWeightRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasuryData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "memberData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "clubData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "governedAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "maxVotingTime",
          type: "u32",
        },
        {
          name: "voteThresholdPercentage",
          type: "u8",
        },
      ],
    },
    {
      name: "financialRecordReduction",
      accounts: [
        {
          name: "accountInfo",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "updateGovernanceConfig",
      accounts: [
        {
          name: "realm",
          isMut: true,
          isSigner: false,
        },
        {
          name: "governance",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "memberData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasuryData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "realmConfig",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proposal",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenOwnerRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposalMetadata",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposalTransaction",
          isMut: true,
          isSigner: false,
        },
        {
          name: "communityTokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "voterWeightRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "splGovernance",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "newQuorum",
          type: "bytes",
        },
        {
          name: "seeds",
          type: {
            vec: {
              vec: "bytes",
            },
          },
        },
        {
          name: "newVotingTime",
          type: {
            option: "u32",
          },
        },
      ],
    },
    {
      name: "executeUpdateGovernanceConfig",
      accounts: [
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "realm",
          isMut: false,
          isSigner: false,
        },
        {
          name: "governance",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposal",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposalMetadata",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasuryData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposalTransaction",
          isMut: true,
          isSigner: false,
        },
        {
          name: "splGovernanceProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "createUpdateRoleProposal",
      accounts: [
        {
          name: "realm",
          isMut: true,
          isSigner: false,
        },
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proposal",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposalTransaction",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasuryData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "memberData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "communityMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenOwnerRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "voterWeightRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "governance",
          isMut: true,
          isSigner: false,
        },
        {
          name: "realmConfig",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proposalMetadata",
          isMut: true,
          isSigner: false,
        },
        {
          name: "escrowProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "splGovernanceProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "roleWeigthConfig",
          type: {
            vec: {
              defined: "UpdateRoleWeight",
            },
          },
        },
      ],
    },
    {
      name: "executeUpdateRole",
      accounts: [
        {
          name: "clubData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "realm",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proposal",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasuryData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proposalTransaction",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposalMetadata",
          isMut: true,
          isSigner: false,
        },
        {
          name: "governance",
          isMut: true,
          isSigner: false,
        },
        {
          name: "escrowProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "splGovernanceProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "createChangeClubConfigGovernance",
      accounts: [
        {
          name: "realm",
          isMut: false,
          isSigner: false,
        },
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "memberData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasuryData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "governance",
          isMut: false,
          isSigner: false,
        },
        {
          name: "realmConfig",
          isMut: false,
          isSigner: false,
        },
        {
          name: "realmAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "voterWeightRecord",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenOwnerRecord",
          isMut: false,
          isSigner: false,
        },
        {
          name: "goverenedAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "splGovernanceProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "voteThreshold",
          type: "u8",
        },
        {
          name: "maxVotingTime",
          type: "u32",
        },
      ],
    },
    {
      name: "createSolseaProposal",
      accounts: [
        {
          name: "realm",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposal",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposalTransaction",
          isMut: true,
          isSigner: false,
        },
        {
          name: "offer",
          isMut: false,
          isSigner: false,
        },
        {
          name: "escrowWantedToken",
          isMut: false,
          isSigner: false,
        },
        {
          name: "realmConfig",
          isMut: false,
          isSigner: false,
        },
        {
          name: "makerWantedToken",
          isMut: false,
          isSigner: false,
        },
        {
          name: "offeredTokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "wantedTokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "governance",
          isMut: true,
          isSigner: false,
        },
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proposalMetadata",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "memberData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "communityTokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasuryData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenOwnerRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "escrowProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "voterWeightRecord",
          isMut: true,
          isSigner: false,
        },
        {
          name: "splGovernance",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "treasuryIndex",
          type: "u32",
        },
        {
          name: "chainId",
          type: "string",
        },
        {
          name: "offeredAmount",
          type: "u64",
        },
        {
          name: "wantedAmount",
          type: "u64",
        },
        {
          name: "sellerFeeBps",
          type: "u16",
        },
        {
          name: "useDeny",
          type: "bool",
        },
        {
          name: "action",
          type: "u8",
        },
      ],
    },
    {
      name: "executeSolseaTransaction",
      accounts: [
        {
          name: "clubData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "offer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "solseaEscrow",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authorityAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "solseaProfitAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "solseaEscrowTokens",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposalMetadata",
          isMut: true,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: true,
          isSigner: false,
        },
        {
          name: "maker",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposal",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposalTransaction",
          isMut: true,
          isSigner: false,
        },
        {
          name: "memberData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "solseaProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "wantedTokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "offeredTokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "escrowWantedToken",
          isMut: true,
          isSigner: false,
        },
        {
          name: "makerWantedToken",
          isMut: true,
          isSigner: false,
        },
        {
          name: "makerOfferedToken",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "splGovernance",
          isMut: false,
          isSigner: false,
        },
        {
          name: "governance",
          isMut: true,
          isSigner: false,
        },
        {
          name: "profitAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "escrowProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "action",
          type: "u8",
        },
        {
          name: "treasuryIndex",
          type: "u32",
        },
        {
          name: "chainId",
          type: "string",
        },
        {
          name: "authorityBump",
          type: "u8",
        },
        {
          name: "creatorsCount",
          type: {
            option: "u8",
          },
        },
        {
          name: "sellerFeeBps",
          type: {
            option: "u16",
          },
        },
        {
          name: "royalties",
          type: {
            option: {
              array: ["u8", 5],
            },
          },
        },
      ],
    },
    {
      name: "cancelSolseaOffer",
      accounts: [
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "solseaEscrow",
          isMut: true,
          isSigner: false,
        },
        {
          name: "solseaEscrowTokens",
          isMut: true,
          isSigner: false,
        },
        {
          name: "offeredTokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "solseaAuthority",
          isMut: true,
          isSigner: false,
        },
        {
          name: "proposal",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: false,
          isSigner: false,
        },
        {
          name: "offer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "makerOfferedTokens",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "memberData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "escrowProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "solseaProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "chainId",
          type: "string",
        },
      ],
    },
    {
      name: "reserveRights",
      accounts: [
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasuryData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "memberData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: false,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "reservedRights",
          type: {
            defined: "ReservedRights",
          },
        },
      ],
    },
    {
      name: "updateAllocation",
      accounts: [
        {
          name: "clubData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasuryData",
          isMut: true,
          isSigner: false,
        },
        {
          name: "memberData",
          isMut: false,
          isSigner: false,
        },
        {
          name: "fundraiseConfig",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "equal",
          type: {
            option: "u64",
          },
        },
        {
          name: "customAllocations",
          type: {
            option: {
              vec: {
                defined: "CustomAllocation",
              },
            },
          },
        },
        {
          name: "removeAllocation",
          type: {
            option: {
              vec: {
                defined: "CustomAllocation",
              },
            },
          },
        },
        {
          name: "newCap",
          type: {
            option: "u64",
          },
        },
      ],
    },
  ],
  accounts: [
    {
      name: "clubData",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "realm",
            type: "publicKey",
          },
          {
            name: "name",
            type: "string",
          },
          {
            name: "slotCreated",
            type: "u64",
          },
          {
            name: "clubType",
            type: "u8",
          },
          {
            name: "roleConfig",
            type: {
              vec: {
                defined: "RoleConfig",
              },
            },
          },
          {
            name: "treasuryCount",
            type: "u32",
          },
          {
            name: "maxVoterWeight",
            type: {
              option: "u64",
            },
          },
          {
            name: "stakeCount",
            type: "u32",
          },
          {
            name: "activeStakeCount",
            type: "u32",
          },
          {
            name: "hasActiveStaking",
            type: "bool",
          },
          {
            name: "numberOfMembers",
            type: "u32",
          },
          {
            name: "defaultRole",
            type: {
              option: "string",
            },
          },
          {
            name: "kycConfig",
            type: {
              option: {
                defined: "KycConfig",
              },
            },
          },
        ],
      },
    },
    {
      name: "clubVault",
      type: {
        kind: "struct",
        fields: [],
      },
    },
    {
      name: "clubVaultData",
      type: {
        kind: "struct",
        fields: [
          {
            name: "chainId",
            type: "string",
          },
        ],
      },
    },
    {
      name: "fundraiseConfig",
      type: {
        kind: "struct",
        fields: [
          {
            name: "treasury",
            type: "publicKey",
          },
          {
            name: "capAmount",
            type: "u64",
          },
          {
            name: "raisedAmount",
            type: "u64",
          },
          {
            name: "isActive",
            type: "bool",
          },
          {
            name: "fundraiseIndex",
            type: "u32",
          },
          {
            name: "allocation",
            type: {
              option: {
                defined: "Allocation",
              },
            },
          },
        ],
      },
    },
    {
      name: "financialRecord",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "treasury",
            type: "publicKey",
          },
          {
            name: "sellOffersCount",
            type: "u32",
          },
          {
            name: "listedFinancialRights",
            type: "u64",
          },
          {
            name: "depositRecords",
            type: {
              vec: {
                defined: "DepositRecord",
              },
            },
          },
        ],
      },
    },
    {
      name: "financialRecordOffer",
      type: {
        kind: "struct",
        fields: [
          {
            name: "treasury",
            type: "publicKey",
          },
          {
            name: "financialRecord",
            type: "publicKey",
          },
          {
            name: "amountOfRights",
            type: "u64",
          },
          {
            name: "price",
            type: "u64",
          },
          {
            name: "seller",
            type: "publicKey",
          },
          {
            name: "wantedTokenMint",
            type: {
              option: "publicKey",
            },
          },
          {
            name: "buyer",
            type: {
              option: "publicKey",
            },
          },
          {
            name: "financialIndex",
            type: "u32",
          },
          {
            name: "initialAmountOfRights",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "financialRecordDepricated",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "treasury",
            type: "publicKey",
          },
          {
            name: "financialRight",
            type: "u64",
          },
          {
            name: "latestFundraiseIndex",
            type: "u32",
          },
          {
            name: "validFromIndex",
            type: {
              option: "u32",
            },
          },
          {
            name: "sellOffersCount",
            type: "u32",
          },
          {
            name: "listedFinancialAmount",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "magicEdenData",
      type: {
        kind: "struct",
        fields: [
          {
            name: "instruction",
            type: {
              defined: "MagicEdenInstruction",
            },
          },
          {
            name: "data",
            type: {
              vec: "bytes",
            },
          },
          {
            name: "accounts",
            type: {
              vec: "publicKey",
            },
          },
        ],
      },
    },
    {
      name: "maxVoterWeightRecord",
      type: {
        kind: "struct",
        fields: [
          {
            name: "realm",
            type: "publicKey",
          },
          {
            name: "governingTokenMint",
            type: "publicKey",
          },
          {
            name: "maxVoterWeight",
            type: "u64",
          },
          {
            name: "maxVoterWeightExpiry",
            type: {
              option: "u64",
            },
          },
          {
            name: "reserved",
            type: {
              array: ["u8", 8],
            },
          },
        ],
      },
    },
    {
      name: "allowedMemberData",
      type: {
        kind: "struct",
        fields: [
          {
            name: "clubData",
            type: "publicKey",
          },
          {
            name: "memberPubkey",
            type: "publicKey",
          },
          {
            name: "isMember",
            type: "bool",
          },
          {
            name: "status",
            type: "u8",
          },
          {
            name: "role",
            type: "string",
          },
          {
            name: "joinedAt",
            type: "i64",
          },
          {
            name: "joinedAtSlot",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "nftVoteRecord",
      type: {
        kind: "struct",
        fields: [
          {
            name: "proposal",
            type: "publicKey",
          },
          {
            name: "nftMint",
            type: "publicKey",
          },
          {
            name: "governingTokenOwner",
            type: "publicKey",
          },
        ],
      },
    },
    {
      name: "proposalMetadata",
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            type: "string",
          },
          {
            name: "options",
            type: {
              vec: "string",
            },
          },
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "discussionLink",
            type: "string",
          },
          {
            name: "treasury",
            type: "publicKey",
          },
          {
            name: "currentFundraiseIndex",
            type: "u32",
          },
          {
            name: "totalFinancialPower",
            type: "u64",
          },
          {
            name: "proposal",
            type: "publicKey",
          },
          {
            name: "proposalIndex",
            type: "u32",
          },
          {
            name: "realm",
            type: "publicKey",
          },
          {
            name: "clubData",
            type: "publicKey",
          },
          {
            name: "governance",
            type: "publicKey",
          },
          {
            name: "isCreated",
            type: "bool",
          },
          {
            name: "description",
            type: "string",
          },
          {
            name: "authorityRole",
            type: "string",
          },
          {
            name: "dataPda",
            type: {
              option: "publicKey",
            },
          },
          {
            name: "proposalType",
            type: {
              defined: "ProposalType",
            },
          },
          {
            name: "proposalStatus",
            type: {
              defined: "ProposalStatus",
            },
          },
          {
            name: "approvalQuorumPercentage",
            type: "u8",
          },
          {
            name: "maxVoterWeight",
            type: {
              option: "u64",
            },
          },
          {
            name: "createdAt",
            type: "i64",
          },
        ],
      },
    },
    {
      name: "stakeConfig",
      type: {
        kind: "struct",
        fields: [
          {
            name: "clubData",
            type: "publicKey",
          },
          {
            name: "capAmount",
            type: "u64",
          },
          {
            name: "raisedAmount",
            type: "u64",
          },
          {
            name: "stakePeriodType",
            type: {
              defined: "StakePeriodType",
            },
          },
          {
            name: "stakePeriodEnd",
            type: {
              option: "i64",
            },
          },
          {
            name: "name",
            type: "string",
          },
          {
            name: "rewardPercentage",
            type: "u32",
          },
          {
            name: "status",
            type: {
              defined: "StakeStatus",
            },
          },
          {
            name: "nftStakeRecord",
            type: {
              option: {
                defined: "NftStakeRecord",
              },
            },
          },
          {
            name: "stakeIndex",
            type: "u32",
          },
        ],
      },
    },
    {
      name: "stakeRecord",
      type: {
        kind: "struct",
        fields: [
          {
            name: "stakeOwner",
            type: "publicKey",
          },
          {
            name: "amount",
            type: "u64",
          },
          {
            name: "hasClaimed",
            type: "bool",
          },
          {
            name: "claimAmount",
            type: "u64",
          },
          {
            name: "hasUnstaked",
            type: "bool",
          },
          {
            name: "unstakePeriodEnd",
            type: {
              option: "i64",
            },
          },
        ],
      },
    },
    {
      name: "transferProfitData",
      type: {
        kind: "struct",
        fields: [
          {
            name: "treasury",
            type: "publicKey",
          },
          {
            name: "treasuryData",
            type: "publicKey",
          },
          {
            name: "treasuryToken",
            type: "publicKey",
          },
          {
            name: "proposal",
            type: "publicKey",
          },
          {
            name: "slotExpiry",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "clubTreasury",
      type: {
        kind: "struct",
        fields: [],
      },
    },
    {
      name: "treasuryData",
      type: {
        kind: "struct",
        fields: [
          {
            name: "fundraiseCount",
            type: "u32",
          },
          {
            name: "treasury",
            type: "publicKey",
          },
          {
            name: "hasActiveFundraise",
            type: "bool",
          },
          {
            name: "governance",
            type: "publicKey",
          },
          {
            name: "maxVoterWeight",
            type: "u64",
          },
          {
            name: "totalFinancialPower",
            type: "u64",
          },
          {
            name: "denominatedCurrency",
            type: {
              option: "publicKey",
            },
          },
          {
            name: "financialTokenAccount",
            type: {
              option: "publicKey",
            },
          },
          {
            name: "sellPermission",
            type: {
              array: [
                {
                  defined: "SellPermission",
                },
                10,
              ],
            },
          },
          {
            name: "withdrawalGovernance",
            type: {
              option: "publicKey",
            },
          },
          {
            name: "financialRecordCount",
            type: "u32",
          },
          {
            name: "treasuryIndex",
            type: "u32",
          },
          {
            name: "financialOffersCount",
            type: "u32",
          },
          {
            name: "transferGovernance",
            type: {
              option: "publicKey",
            },
          },
          {
            name: "changeClubConfigGovernance",
            type: {
              option: "publicKey",
            },
          },
          {
            name: "hasActiveUpdateGovernanceConfig",
            type: "bool",
          },
          {
            name: "clubData",
            type: "publicKey",
          },
          {
            name: "reservedRights",
            type: {
              option: {
                defined: "ReservedRights",
              },
            },
          },
        ],
      },
    },
    {
      name: "universeMetadata",
      type: {
        kind: "struct",
        fields: [
          {
            name: "discriminator",
            type: {
              array: ["u8", 8],
            },
          },
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "candyMachine",
            type: "publicKey",
          },
          {
            name: "mint",
            type: "publicKey",
          },
          {
            name: "mintingEpoch",
            type: "u64",
          },
          {
            name: "currentUniverseLevel",
            type: "u32",
          },
          {
            name: "status",
            type: "u8",
          },
          {
            name: "rarity",
            type: "u8",
          },
          {
            name: "evolutionPoints",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "voterWeightRecord",
      type: {
        kind: "struct",
        fields: [
          {
            name: "realm",
            type: "publicKey",
          },
          {
            name: "governingTokenMint",
            type: "publicKey",
          },
          {
            name: "governingTokenOwner",
            type: "publicKey",
          },
          {
            name: "voterWeight",
            type: "u64",
          },
          {
            name: "voterWeightExpiry",
            type: {
              option: "u64",
            },
          },
          {
            name: "weightAction",
            type: {
              option: {
                defined: "VoterWeightAction",
              },
            },
          },
          {
            name: "weightActionTarget",
            type: {
              option: "publicKey",
            },
          },
          {
            name: "reserved",
            type: {
              array: ["u8", 8],
            },
          },
        ],
      },
    },
    {
      name: "withdrawal",
      type: {
        kind: "struct",
        fields: [],
      },
    },
    {
      name: "withdrawalData",
      type: {
        kind: "struct",
        fields: [
          {
            name: "realm",
            type: "publicKey",
          },
          {
            name: "clubData",
            type: "publicKey",
          },
          {
            name: "treasury",
            type: "publicKey",
          },
          {
            name: "proposal",
            type: "publicKey",
          },
          {
            name: "fundraiseNumber",
            type: "u32",
          },
          {
            name: "withdrawalAmount",
            type: "u64",
          },
          {
            name: "amountWithdrawn",
            type: "u64",
          },
          {
            name: "totalFinancialPower",
            type: "u64",
          },
          {
            name: "withdrawalMint",
            type: "publicKey",
          },
          {
            name: "proposalCreatedAt",
            type: "i64",
          },
        ],
      },
    },
  ],
  types: [
    {
      name: "RoleConfig",
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            type: "string",
          },
          {
            name: "roleWeight",
            type: "u64",
          },
          {
            name: "clubActions",
            type: {
              vec: {
                defined: "ClubAction",
              },
            },
          },
          {
            name: "membersCount",
            type: "u32",
          },
        ],
      },
    },
    {
      name: "KycConfig",
      type: {
        kind: "struct",
        fields: [
          {
            name: "required",
            type: "bool",
          },
          {
            name: "location",
            type: {
              defined: "KycLocation",
            },
          },
        ],
      },
    },
    {
      name: "RolesDto",
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            type: "string",
          },
          {
            name: "roleWeight",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "UpdateRoleWeight",
      type: {
        kind: "struct",
        fields: [
          {
            name: "role",
            type: "string",
          },
          {
            name: "currentWeight",
            type: "u64",
          },
          {
            name: "updateWeight",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "Allocation",
      type: {
        kind: "struct",
        fields: [
          {
            name: "equal",
            type: {
              option: "u64",
            },
          },
          {
            name: "custom",
            type: {
              option: {
                vec: {
                  defined: "CustomAllocation",
                },
              },
            },
          },
        ],
      },
    },
    {
      name: "CustomAllocation",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "amount",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "DepositRecord",
      type: {
        kind: "struct",
        fields: [
          {
            name: "accumulatedAmount",
            type: "u64",
          },
          {
            name: "fundraiseIndex",
            type: "u32",
          },
          {
            name: "depositedAt",
            type: "i64",
          },
          {
            name: "currentFundraiseDeposit",
            type: "u64",
          },
          {
            name: "tradedRight",
            type: {
              option: {
                vec: {
                  defined: "TradedRight",
                },
              },
            },
          },
        ],
      },
    },
    {
      name: "TradedRight",
      type: {
        kind: "struct",
        fields: [
          {
            name: "amount",
            type: "u64",
          },
          {
            name: "timestamp",
            type: "i64",
          },
          {
            name: "tradeType",
            type: {
              defined: "TradedRightType",
            },
          },
        ],
      },
    },
    {
      name: "Order",
      type: {
        kind: "struct",
        fields: [
          {
            name: "amount",
            type: "u64",
          },
          {
            name: "mint",
            type: "publicKey",
          },
          {
            name: "slot",
            type: "u64",
          },
          {
            name: "createdAt",
            type: "i64",
          },
        ],
      },
    },
    {
      name: "Offer",
      type: {
        kind: "struct",
        fields: [
          {
            name: "discriminator",
            type: {
              array: ["u8", 8],
            },
          },
          {
            name: "maker",
            type: "publicKey",
          },
          {
            name: "treasury",
            type: "publicKey",
          },
          {
            name: "offeredAmount",
            type: "u64",
          },
          {
            name: "offeredTokenMint",
            type: "publicKey",
          },
          {
            name: "wantedAmount",
            type: "u64",
          },
          {
            name: "wantedTokenMint",
            type: "publicKey",
          },
          {
            name: "tokenLedgerMint",
            type: "publicKey",
          },
          {
            name: "makerWantedToken",
            type: "publicKey",
          },
          {
            name: "escrowedWantedToken",
            type: "publicKey",
          },
          {
            name: "status",
            type: {
              defined: "OfferStatus",
            },
          },
          {
            name: "offerType",
            type: {
              defined: "OfferType",
            },
          },
          {
            name: "dedicatedTaker",
            type: {
              option: "publicKey",
            },
          },
          {
            name: "proposal",
            type: "publicKey",
          },
          {
            name: "sellerFeeBps",
            type: "u16",
          },
        ],
      },
    },
    {
      name: "NftStakeRecord",
      type: {
        kind: "struct",
        fields: [
          {
            name: "nftOwner",
            type: "publicKey",
          },
          {
            name: "tokenAccount",
            type: "publicKey",
          },
          {
            name: "tokenMint",
            type: "publicKey",
          },
          {
            name: "stakedNft",
            type: "publicKey",
          },
          {
            name: "rarity",
            type: {
              defined: "Rarity",
            },
          },
          {
            name: "hasClaimed",
            type: "bool",
          },
          {
            name: "unstakePeriodEnd",
            type: {
              option: "i64",
            },
          },
        ],
      },
    },
    {
      name: "ReservedRights",
      type: {
        kind: "struct",
        fields: [
          {
            name: "totalReservedRights",
            type: "u64",
          },
          {
            name: "totalReservedPercentage",
            type: "u32",
          },
          {
            name: "individualRights",
            type: {
              vec: {
                defined: "IndividualRight",
              },
            },
          },
        ],
      },
    },
    {
      name: "IndividualRight",
      type: {
        kind: "struct",
        fields: [
          {
            name: "memberPubkey",
            type: "publicKey",
          },
          {
            name: "rightPercentage",
            type: "u32",
          },
          {
            name: "amountOfRights",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "SellPermission",
      type: {
        kind: "struct",
        fields: [
          {
            name: "from",
            type: "u64",
          },
          {
            name: "to",
            type: "u64",
          },
          {
            name: "quorumMinimum",
            type: "u8",
          },
          {
            name: "decimal",
            type: "u16",
          },
          {
            name: "governance",
            type: "publicKey",
          },
        ],
      },
    },
    {
      name: "SellPermissionDto",
      type: {
        kind: "struct",
        fields: [
          {
            name: "from",
            type: "u64",
          },
          {
            name: "to",
            type: "u64",
          },
          {
            name: "quorumMinimum",
            type: "u8",
          },
          {
            name: "decimal",
            type: "u16",
          },
        ],
      },
    },
    {
      name: "SetGovCfgDto",
      type: {
        kind: "struct",
        fields: [
          {
            name: "config",
            type: {
              vec: {
                defined: "GovernanceConfig",
              },
            },
          },
          {
            name: "seeds",
            type: {
              vec: {
                vec: "bytes",
              },
            },
          },
        ],
      },
    },
    {
      name: "KycError",
      type: {
        kind: "enum",
        variants: [
          {
            name: "KycError",
          },
          {
            name: "IncorrectGatekeeper",
          },
          {
            name: "InvalidOwner",
          },
          {
            name: "InvalidToken",
          },
          {
            name: "InvalidSessionToken",
          },
          {
            name: "TokenRevoked",
          },
          {
            name: "ExpectedRevokedToken",
          },
          {
            name: "InvalidStateChange",
          },
          {
            name: "IncorrectProgramId",
          },
          {
            name: "TokenExpired",
          },
          {
            name: "InvalidGatekeeperAccount",
          },
        ],
      },
    },
    {
      name: "KycLocation",
      type: {
        kind: "enum",
        variants: [
          {
            name: "All",
          },
          {
            name: "OnlyUS",
          },
          {
            name: "NonUS",
          },
        ],
      },
    },
    {
      name: "ClubType",
      type: {
        kind: "enum",
        variants: [
          {
            name: "TokenProportional",
          },
          {
            name: "TokenEqual",
          },
          {
            name: "RoleBased",
          },
          {
            name: "NftBased",
          },
        ],
      },
    },
    {
      name: "ClubVoterWeightAction",
      type: {
        kind: "enum",
        variants: [
          {
            name: "CastVote",
          },
          {
            name: "CommentProposal",
          },
          {
            name: "CreateGovernance",
          },
          {
            name: "CreateProposal",
          },
          {
            name: "SignOffProposal",
          },
          {
            name: "CancelProposal",
          },
        ],
      },
    },
    {
      name: "ClubAction",
      type: {
        kind: "enum",
        variants: [
          {
            name: "CastVote",
          },
          {
            name: "CreateDiscussionProposal",
          },
          {
            name: "CreateTreasuryGovernance",
          },
          {
            name: "CreateWithdrawalGovernance",
          },
          {
            name: "CreateTransferGovernance",
          },
          {
            name: "CreateP2PProposal",
          },
          {
            name: "CreateWithdrawalProposal",
          },
          {
            name: "CreateTransferProposal",
          },
          {
            name: "CreateMeProposal",
          },
          {
            name: "SignOffProposal",
          },
          {
            name: "CancelProposal",
          },
          {
            name: "AllowMember",
          },
          {
            name: "CancelP2POffer",
          },
          {
            name: "CancelInvitation",
          },
          {
            name: "Fundraise",
          },
          {
            name: "Distribute",
          },
          {
            name: "SupportClub",
          },
          {
            name: "UpdateMember",
          },
          {
            name: "InitializeStaking",
          },
          {
            name: "StakeTokens",
          },
          {
            name: "CreateFinancialOffer",
          },
          {
            name: "AcceptFinancialOffer",
          },
          {
            name: "CreateSolseaProposal",
          },
          {
            name: "CreateChangeClubConfigGovernance",
          },
          {
            name: "UpdateGovernanceConfig",
          },
          {
            name: "UpdateRoleConfig",
          },
          {
            name: "AddReservedRights",
          },
          {
            name: "UpdateAllocation",
          },
        ],
      },
    },
    {
      name: "TradedRightType",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Buy",
          },
          {
            name: "Sell",
          },
          {
            name: "BuyReserved",
          },
          {
            name: "SellReserved",
          },
        ],
      },
    },
    {
      name: "ProfitType",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Gain",
          },
          {
            name: "Loss",
          },
        ],
      },
    },
    {
      name: "UpdateAllocationAction",
      type: {
        kind: "enum",
        variants: [
          {
            name: "UpdateCustomAllocation",
          },
          {
            name: "RemoveCustomAllocation",
          },
          {
            name: "UpdateEqual",
          },
        ],
      },
    },
    {
      name: "MagicEdenInstruction",
      type: {
        kind: "enum",
        variants: [
          {
            name: "BuyNow",
          },
          {
            name: "Sell",
          },
        ],
      },
    },
    {
      name: "MemberStatus",
      type: {
        kind: "enum",
        variants: [
          {
            name: "UNINVITED",
          },
          {
            name: "PENDING",
          },
          {
            name: "ACCEPTED",
          },
          {
            name: "REJECTED",
          },
          {
            name: "CANCELED",
          },
        ],
      },
    },
    {
      name: "OfferStatus",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Initialised",
          },
          {
            name: "Accepted",
          },
          {
            name: "Canceled",
          },
          {
            name: "PendingBuyNowExecutionOnMagicEden",
          },
          {
            name: "ExecutedBuyNowOnMagicEden",
          },
          {
            name: "CanceledOnMagic",
          },
          {
            name: "PendingSellExecutionOnMagicEden",
          },
          {
            name: "ExecutedSellOnMagicEden",
          },
          {
            name: "FundsTransfered",
          },
          {
            name: "ListedOnSolsea",
          },
          {
            name: "ExecutedBuyNowOnSolsea",
          },
          {
            name: "CanceledOnSolsea",
          },
        ],
      },
    },
    {
      name: "OfferType",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Buy",
          },
          {
            name: "Sell",
          },
        ],
      },
    },
    {
      name: "ProposalAction",
      type: {
        kind: "enum",
        variants: [
          {
            name: "BuyNFT",
          },
          {
            name: "SellNFT",
          },
        ],
      },
    },
    {
      name: "ProposalType",
      type: {
        kind: "enum",
        variants: [
          {
            name: "BuyP2P",
          },
          {
            name: "SellP2P",
          },
          {
            name: "BuyNowMagicEden",
          },
          {
            name: "SellMagicEden",
          },
          {
            name: "TransferFunds",
          },
          {
            name: "Discussion",
          },
          {
            name: "Withdrawal",
          },
          {
            name: "SellSolsea",
          },
          {
            name: "BuySolsea",
          },
          {
            name: "UpdateGovernanceConfig",
          },
          {
            name: "UpdateRoleConfig",
          },
        ],
      },
    },
    {
      name: "ProposalStatus",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Pending",
          },
          {
            name: "CreatedBuyP2P",
          },
          {
            name: "CreatedSellP2P",
          },
          {
            name: "ExecutedBuyP2P",
          },
          {
            name: "ExecutedSellP2P",
          },
          {
            name: "CreatedBuyNowMagicEden",
          },
          {
            name: "ExecutedBuyNowMagicEden",
          },
          {
            name: "FinishedBuyNowMagicEden",
          },
          {
            name: "CreatedSellMagicEden",
          },
          {
            name: "ExecutedSellMagicEden",
          },
          {
            name: "FinishedSellMagicEden",
          },
          {
            name: "CreatedTransferFunds",
          },
          {
            name: "ExecutedTransferFunds",
          },
          {
            name: "CreatedDiscussion",
          },
          {
            name: "CreatedWithdrawal",
          },
          {
            name: "ExecutedWithdrawal",
          },
          {
            name: "CanceledByOwner",
          },
          {
            name: "CreatedUpdateGovernanceConfig",
          },
          {
            name: "ExecutedUpdateGovernanceConfig",
          },
          {
            name: "CreatedUpdateRoleConfig",
          },
          {
            name: "ExecutedUpdateRoleConfig",
          },
          {
            name: "ExecutedSolseaBuy",
          },
          {
            name: "ExecutedSolseaSell",
          },
        ],
      },
    },
    {
      name: "StakePeriodType",
      type: {
        kind: "enum",
        variants: [
          {
            name: "OneMonth",
          },
          {
            name: "ThreeMonths",
          },
          {
            name: "SixMonths",
          },
          {
            name: "TwelveMonths",
          },
        ],
      },
    },
    {
      name: "StakeStatus",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Funding",
          },
          {
            name: "InProgress",
          },
          {
            name: "Finished",
          },
          {
            name: "Canceled",
          },
        ],
      },
    },
    {
      name: "StakeOption",
      type: {
        kind: "enum",
        variants: [
          {
            name: "FT",
          },
          {
            name: "NFT",
          },
        ],
      },
    },
    {
      name: "UNQNftRarity",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Common",
          },
          {
            name: "Rare",
          },
          {
            name: "Epic",
          },
          {
            name: "Legendary",
          },
        ],
      },
    },
    {
      name: "Rarity",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Common",
          },
          {
            name: "Rare",
          },
          {
            name: "Epic",
          },
          {
            name: "Legendary",
          },
        ],
      },
    },
    {
      name: "VoterWeightAction",
      type: {
        kind: "enum",
        variants: [
          {
            name: "CastVote",
          },
          {
            name: "CommentProposal",
          },
          {
            name: "CreateGovernance",
          },
          {
            name: "CreateProposal",
          },
          {
            name: "SignOffProposal",
          },
        ],
      },
    },
  ],
  events: [
    {
      name: "StakingOpenEvent",
      fields: [
        {
          name: "clubAddress",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "FinanicalOfferOpenEvent",
      fields: [
        {
          name: "clubAddress",
          type: "publicKey",
          index: false,
        },
        {
          name: "financialRecordAddress",
          type: "publicKey",
          index: false,
        },
        {
          name: "seller",
          type: "publicKey",
          index: false,
        },
        {
          name: "treasury",
          type: "publicKey",
          index: false,
        },
        {
          name: "treasuryData",
          type: "publicKey",
          index: false,
        },
        {
          name: "amountOfRights",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "AcceptFinancialOfferEvent",
      fields: [
        {
          name: "clubAddress",
          type: "publicKey",
          index: false,
        },
        {
          name: "financialRecordAddress",
          type: "publicKey",
          index: false,
        },
        {
          name: "buyer",
          type: "publicKey",
          index: false,
        },
        {
          name: "treasury",
          type: "publicKey",
          index: false,
        },
        {
          name: "treasuryData",
          type: "publicKey",
          index: false,
        },
        {
          name: "boughtAmount",
          type: "u64",
          index: false,
        },
        {
          name: "seller",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "FundraiseCreatedEvent",
      fields: [
        {
          name: "clubAddress",
          type: "publicKey",
          index: false,
        },
        {
          name: "cap",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "InvitationEvent",
      fields: [
        {
          name: "clubAddress",
          type: "publicKey",
          index: false,
        },
        {
          name: "invitedMembers",
          type: {
            vec: "publicKey",
          },
          index: false,
        },
      ],
    },
    {
      name: "AcceptOfferEvent",
      fields: [
        {
          name: "proposalAddress",
          type: "publicKey",
          index: false,
        },
        {
          name: "offerAccount",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "CreateProposalEvent",
      fields: [
        {
          name: "realmAddress",
          type: "publicKey",
          index: false,
        },
        {
          name: "proposalAddress",
          type: "publicKey",
          index: false,
        },
        {
          name: "proposalMetadata",
          type: "publicKey",
          index: false,
        },
        {
          name: "clubAddress",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "CastVoteEvent",
      fields: [
        {
          name: "clubAddress",
          type: "publicKey",
          index: false,
        },
        {
          name: "proposal",
          type: "publicKey",
          index: false,
        },
        {
          name: "proposalMetadata",
          type: "publicKey",
          index: false,
        },
        {
          name: "treasuryData",
          type: "publicKey",
          index: false,
        },
        {
          name: "realmAddress",
          type: "publicKey",
          index: false,
        },
      ],
    },
  ],
  errors: [
    {
      code: 6000,
      name: "WrongSplGovProgram",
      msg: "Wrong spl gov id!",
    },
    {
      code: 6001,
      name: "WrongEscrowProgram",
      msg: "Wrong escrow id!",
    },
    {
      code: 6002,
      name: "WrongUNQPubKey",
      msg: "Wrong UNQ mint pub key!",
    },
    {
      code: 6003,
      name: "WrongPermissionLength",
      msg: "Wrong length of Permission config!",
    },
    {
      code: 6004,
      name: "NotAMember",
      msg: "You are not allowed to make deposits!",
    },
    {
      code: 6005,
      name: "InvalidMemberStatus",
      msg: "Invalid member status, valid values are: 0,1,2",
    },
    {
      code: 6006,
      name: "NotEnoughFunds",
      msg: "Not enough funds",
    },
    {
      code: 6007,
      name: "InvalidAuthority",
      msg: "Not a valid authority",
    },
    {
      code: 6008,
      name: "InvalidMint",
      msg: "Invalid mint provided",
    },
    {
      code: 6009,
      name: "InvalidPerformanceFeeConfig",
      msg: "Performance fee configuration is invalid!",
    },
    {
      code: 6010,
      name: "TimeInPast",
      msg: "Time in past",
    },
    {
      code: 6011,
      name: "StartAfterTheEndTime",
      msg: "Start after end time",
    },
    {
      code: 6012,
      name: "FundraiseInvalidAmount",
      msg: "Invalid fundraise amount",
    },
    {
      code: 6013,
      name: "FundraiseAmountAlreadyMet",
      msg: "Fundraise amount already met",
    },
    {
      code: 6014,
      name: "FundraiseHasEnded",
      msg: "Fundraise has ended",
    },
    {
      code: 6015,
      name: "FundraiseStillInProgress",
      msg: "Fundraise still in progress",
    },
    {
      code: 6016,
      name: "InvalidClubTypeStatus",
      msg: "Invalid club type, valid values are: 0,1,2,3",
    },
    {
      code: 6017,
      name: "InvalidGovernance",
      msg: "Invalid governance address",
    },
    {
      code: 6018,
      name: "SellPermissionNotSatisfied",
      msg: "Sell permission not satisfied",
    },
    {
      code: 6019,
      name: "InvalidCancelAuthority",
      msg: "You do not have the permission to cancel this invitation",
    },
    {
      code: 6020,
      name: "InvalidTreasury",
      msg: "Invalid treasury address",
    },
    {
      code: 6021,
      name: "InvalidRole",
      msg: "Invalid role to perform this action",
    },
    {
      code: 6022,
      name: "InvalidVoterWeightAction",
      msg: "Invalid voter weight action",
    },
    {
      code: 6023,
      name: "VoterWeightActionNotAllowed",
      msg: "Voter weight action not allowed",
    },
    {
      code: 6024,
      name: "BelowMinimumVoteTreshold",
      msg: "Below minimum vote treshold",
    },
    {
      code: 6025,
      name: "BelowMinimumVoteTime",
      msg: "Below minimum vote time",
    },
    {
      code: 6026,
      name: "MemberKeysMissmatch",
      msg: "Member data PDA sent doesn't match the one generated on Solana",
    },
    {
      code: 6027,
      name: "MemberAlreadyExists",
      msg: "Member data PDA has already been initialized",
    },
    {
      code: 6028,
      name: "InvalidProposalAction",
      msg: "Invalid proposal action",
    },
    {
      code: 6029,
      name: "VoteNotAllowed",
      msg: "Member not allowed to vote on this proposal",
    },
    {
      code: 6030,
      name: "MaxOrProposalRemainingAccountsMissing",
      msg: "Max Voter Weight Record and Proposal need to be passed as remaining accounts to cast a vote",
    },
    {
      code: 6031,
      name: "WrongProposalAddress",
      msg: "Wrong proposal account passed as remaining account",
    },
    {
      code: 6032,
      name: "WrongMaxVoterWeightRecord",
      msg: "Wrong MaxVoterWeightRecord account passed as remaining account",
    },
    {
      code: 6033,
      name: "InvalidVoterWeightProgram",
      msg: "Invalid voter weight program id",
    },
    {
      code: 6034,
      name: "WrongFundraiseConfig",
      msg: "Wrong fundraise config",
    },
    {
      code: 6035,
      name: "FundraiseRemainingAccountMissing",
      msg: "Fundraise config needs to be passed as remaining account",
    },
    {
      code: 6036,
      name: "InvalidAuthorityToCreateGovernance",
      msg: "Invalid authority to create governance: Only owner of the club can create governance!",
    },
    {
      code: 6037,
      name: "GovernanceCreationAfterFundraise",
      msg: "The governance over treasury must be defined before the fundraise",
    },
    {
      code: 6038,
      name: "WrongGovernanceAccount",
      msg: "Wrong or uninitialized governance account provided to create_fundraise ix",
    },
    {
      code: 6039,
      name: "ProposalAlreadyInitialized",
      msg: "Proposal aready initialized",
    },
    {
      code: 6040,
      name: "ProposalMetadataLengthOverflow",
      msg: "Proposal metadata string length overflow",
    },
    {
      code: 6041,
      name: "FundraiseAmountExceeded",
      msg: "Fundraise amount exceeded",
    },
    {
      code: 6042,
      name: "InvalidNftAccount",
      msg: "Invalid NFT account provided",
    },
    {
      code: 6043,
      name: "NftNotOnTheProvidedAccount",
      msg: "Invalid NFT account provided",
    },
    {
      code: 6044,
      name: "CollectionMustBeVerified",
      msg: "Collection must be verified",
    },
    {
      code: 6045,
      name: "CollectionMissing",
      msg: "Collection missing",
    },
    {
      code: 6046,
      name: "InvalidAccountOwner",
      msg: "Invalid account owner",
    },
    {
      code: 6047,
      name: "InvalidTokenMetadataAccount",
      msg: "Invalid token metadata account",
    },
    {
      code: 6048,
      name: "TokenMetadataDoesNotMatch",
      msg: "Token metadata does not match",
    },
    {
      code: 6049,
      name: "OnlyForNftBasedClubs",
      msg: "Only callable for nft based clubs",
    },
    {
      code: 6050,
      name: "InvalidCollection",
      msg: "Invalid collection",
    },
    {
      code: 6051,
      name: "NftAlreadyVoted",
      msg: "Nft already voted on",
    },
    {
      code: 6052,
      name: "MissingRemainingAccounts",
      msg: "Missing remaining accounts",
    },
    {
      code: 6053,
      name: "ProposalMetadataAlreadyInitialized",
      msg: "Proposal metadata aready initialized",
    },
    {
      code: 6054,
      name: "InvalidSellPermissionGovernanceAccount",
      msg: "Invalid sell permission governance account",
    },
    {
      code: 6055,
      name: "SellPermissionAmountNotSatisfied",
      msg: "Sell permission amount not satisfied",
    },
    {
      code: 6056,
      name: "SellPermissionGovernanceOnlyForBuyAction",
      msg: "Sell permission governance only for Buy action",
    },
    {
      code: 6057,
      name: "AccountClosingErr",
      msg: "Couldn't transfer SOLs from profit_token to profit",
    },
    {
      code: 6058,
      name: "TransferProfitDataExpired",
      msg: "Transfer profit data needs to be updated in the same slot",
    },
    {
      code: 6059,
      name: "WithdrawalGovernanceAlreadyCreated",
      msg: "Withdrawal governance for this club has already been created",
    },
    {
      code: 6060,
      name: "StakingInProgress",
      msg: "Staking already in progress",
    },
    {
      code: 6061,
      name: "InvalidStakeAmount",
      msg: "Invalid stake amount parameter",
    },
    {
      code: 6062,
      name: "InvalidStakeStartDate",
      msg: "Invalid stake start date: Must select current date or future date",
    },
    {
      code: 6063,
      name: "InvalidStakeEndDate",
      msg: "Invalid stake end date: Stake-funding period must last at least one day",
    },
    {
      code: 6064,
      name: "StakeCapOverflow",
      msg: "Stake cap overflow",
    },
    {
      code: 6065,
      name: "NotEnoughUnqTokens",
      msg: "Not Enought UNQ Tokens",
    },
    {
      code: 6066,
      name: "StakingHasntStartedYet",
      msg: "Staking funding period hasn't started yet",
    },
    {
      code: 6067,
      name: "StakingFundingEnded",
      msg: "Staking funding period has ended",
    },
    {
      code: 6068,
      name: "UnstakePeriodHasntEnded",
      msg: "Unstake period is three weeks, and it hasn't ended",
    },
    {
      code: 6069,
      name: "StakingWillBeOver",
      msg: "Staking will be over by the time, unstaking period has ended",
    },
    {
      code: 6070,
      name: "InvalidDepositAmount",
      msg: "Invalid deposit amount",
    },
    {
      code: 6071,
      name: "MaxNumberOfFinancialRecordsExceeded",
      msg: "Cannot support with less than 1 tokens",
    },
    {
      code: 6072,
      name: "MaxNumberOfActiveStakeRecords",
      msg: "Exceeds max number of active stakes",
    },
    {
      code: 6073,
      name: "MaxStakeNameExceeded",
      msg: "Max stake name exceeded",
    },
    {
      code: 6074,
      name: "MaxCapExceeded",
      msg: "Max cap exceeded!",
    },
    {
      code: 6075,
      name: "StakingCanceled",
      msg: "Staking canceled!",
    },
    {
      code: 6076,
      name: "AlreadyUnstaked",
      msg: "Already unstaked!",
    },
    {
      code: 6077,
      name: "CannotClaimBeforeFundingPeriodIsOver",
      msg: "Cannot claim before stake funding period is over!",
    },
    {
      code: 6078,
      name: "StakePeriodHasntEnded",
      msg: "Stake period hasn't ended",
    },
    {
      code: 6079,
      name: "StakeStatusNeedsToBeInProgress",
      msg: "Stake status needs to be InProgress",
    },
    {
      code: 6080,
      name: "WrongRewardTokenAccount",
      msg: "Stake status needs to be InProgress",
    },
    {
      code: 6081,
      name: "NotFundingStatus",
      msg: "StakeConfig must be in Funding status to be changed to InProgress",
    },
    {
      code: 6082,
      name: "SellPermissionConfigFull",
      msg: "Sell permission config full",
    },
    {
      code: 6083,
      name: "WrongProposalUpdateAuthorority",
      msg: "Wrong proposal update authority",
    },
    {
      code: 6084,
      name: "InvalidDepositRecordIndex",
      msg: "The index of DepositRecord seed must be leq than fundraise count at proposal init time",
    },
    {
      code: 6085,
      name: "WrongDepositRecordOwner",
      msg: "The payer of the transaction is not the owner of DepositRecord",
    },
    {
      code: 6086,
      name: "WrongDepositRecordKey",
      msg: "The payer of the transaction is not the owner of DepositRecord",
    },
    {
      code: 6087,
      name: "InvalidMaxAmountPerFundraise",
      msg: "The maximum amount of SOLs per fundraise is 200",
    },
    {
      code: 6088,
      name: "MaxNumberOfMembersExceeded",
      msg: "The maximum amount of members per club is 99",
    },
    {
      code: 6089,
      name: "InvalidMinAmountPerFundraise",
      msg: "The minimum amount of SOLs per fundraise is 200",
    },
    {
      code: 6090,
      name: "WrongOwnerOfTokenAccount",
      msg: "Wrong owner of NFT Token Account",
    },
    {
      code: 6091,
      name: "SpaceAlreadyAllocated",
      msg: "Space already reallocated",
    },
    {
      code: 6092,
      name: "WrongAmountOnTheNftAccount",
      msg: "The amount of token on the NFT Token Account must be 1",
    },
    {
      code: 6093,
      name: "WrongNftMintForStaking",
      msg: "Mint account doesn't match the token account provided for staking",
    },
    {
      code: 6094,
      name: "WrongUniverseMetadataForMint",
      msg: "UniverseMetadata doesn't match the provided mint",
    },
    {
      code: 6095,
      name: "UniverseLevelLow",
      msg: "Universe level too low to stake",
    },
    {
      code: 6096,
      name: "NftStakeAccountInitialized",
      msg: "The PDA of the TokenAccount storing NFT is already initialized",
    },
    {
      code: 6097,
      name: "WrongStakedNftAddress",
      msg: "The PDA of the TokenAccount storing NFT is wrong",
    },
    {
      code: 6098,
      name: "LowerRarity",
      msg: "Universe NFT must be of higher rarity than the one already staked",
    },
    {
      code: 6099,
      name: "NftClaimed",
      msg: "This NFT was already claimed",
    },
    {
      code: 6100,
      name: "WrongStakedTokensAddress",
      msg: "The PDA of the TokenAccount storing NFT is wrong",
    },
    {
      code: 6101,
      name: "CannotTransferOldStakedNft",
      msg: "Failed to transfer old NFT to its owner",
    },
    {
      code: 6102,
      name: "WrongNftReceiverTokenAccount",
      msg: "Wrong NFT receiver TokenAccount passed",
    },
    {
      code: 6103,
      name: "WrongOwnerOfStakedNft",
      msg: "Wrong owner of the staked NFT",
    },
    {
      code: 6104,
      name: "AlreadyClaimed",
      msg: "Already claimed your tokens",
    },
    {
      code: 6105,
      name: "WrongStakeRecordOwner",
      msg: "Wrong stake record owner",
    },
    {
      code: 6106,
      name: "InvalidFinancialRecordAmount",
      msg: "Invalid financial record amount",
    },
    {
      code: 6107,
      name: "WrongCancelFinancialOfferAuthority",
      msg: "Signer has no authority to cancel this financial offer",
    },
    {
      code: 6108,
      name: "WrongFinancialBuyerTokenMint",
      msg: "Wrong financial buyer token mint",
    },
    {
      code: 6109,
      name: "NotEnoughTokensToAcceptFinancialOffer",
      msg: "Not enough tokens to accept financial offer",
    },
    {
      code: 6110,
      name: "CannotCreateFinancialOffer",
      msg: "Cannot create financial offer while a fundraise is active",
    },
    {
      code: 6111,
      name: "NotDesignatedBuyerForFinancialOffer",
      msg: "You are not the designated buyer for this financial offer",
    },
    {
      code: 6112,
      name: "FinancialOffersNotZero",
      msg: "There cannot be any active financial offers when starting a fundraise",
    },
    {
      code: 6113,
      name: "WrongMagicEdenAccountsHolder",
      msg: "Wrong accounts holder for BuyNow on MagicEden",
    },
    {
      code: 6114,
      name: "NoOfferAccountForMagicEden",
      msg: "Wrong PDA passed as offer address for MagicEden BuyNow",
    },
    {
      code: 6115,
      name: "NoWantedTokenMintForMagicEdenBuyNow",
      msg: "Wrong wanted_token_mint passed as remaining account passed as remaining account",
    },
    {
      code: 6116,
      name: "NoEscrowedWantedTokenAccountForMagicEden",
      msg: "Wrong escrowed_wanted_token account passed as remaining account for BuyNow",
    },
    {
      code: 6117,
      name: "NoOfferedTokenMintForMagicEden",
      msg: "No offered_token_mint passed as remaining account",
    },
    {
      code: 6118,
      name: "NoMakerWantedTokenForMagicEden",
      msg: "No maker_wanted_token passed as remaining account",
    },
    {
      code: 6119,
      name: "NoTokenProgramForMagicEden",
      msg: "No token_program passed as remaining account",
    },
    {
      code: 6120,
      name: "InvalidFinancialRightsAmount",
      msg: "Invalid amount of financial rights to buy",
    },
    {
      code: 6121,
      name: "FinancialRightsAmountExceeded",
      msg: "You do not have enough financial rights",
    },
    {
      code: 6122,
      name: "WrongMeBuyNowMaker",
      msg: "This is not the treasury that made this offer",
    },
    {
      code: 6123,
      name: "WrongMeSellMaker",
      msg: "This is not the vault that made this offer",
    },
    {
      code: 6124,
      name: "ProposalToBuyNowNotExecuted",
      msg: "Proposal to buy on magic eden needs to be executed",
    },
    {
      code: 6125,
      name: "ProposalToSellNotExecuted",
      msg: "Proposal to sell on magic eden needs to be executed",
    },
    {
      code: 6126,
      name: "FailedToParseDenominatedCurrencyAsMint",
      msg: "Wrong denominated currency token account mint",
    },
    {
      code: 6127,
      name: "WrongDenominatedCurrencyTokenAccountMint",
      msg: "Wrong denominated currency token account mint",
    },
    {
      code: 6128,
      name: "WrongDenominatedTokenAddress",
      msg: "Wrong denominated token address",
    },
    {
      code: 6129,
      name: "FailedToSupportClub",
      msg: "Failed to support club",
    },
    {
      code: 6130,
      name: "TransferGovernanceAlreadyCreated",
      msg: "Transfer governance for this club has already been created",
    },
    {
      code: 6131,
      name: "InvalidAuthorityToInviteMember",
      msg: "Not a valid authority to invite a member",
    },
    {
      code: 6132,
      name: "InvalidAuthorityToCancelOffer",
      msg: "Invalid authority to cancel P2P offer",
    },
    {
      code: 6133,
      name: "InvalidAuthorityToCreateFundraise",
      msg: "Invalid authority to create fundraise",
    },
    {
      code: 6134,
      name: "InvalidRoleToSupport",
      msg: "Invalid role to perform the support club action",
    },
    {
      code: 6135,
      name: "InvalidAuthorityToFinishStaking",
      msg: "Invalid role to finish staking",
    },
    {
      code: 6136,
      name: "InvalidAuthorityToInitializeStaking",
      msg: "Invalid role to initialize staking",
    },
    {
      code: 6137,
      name: "InvalidAuthorityToUpdateAllocation",
      msg: "Invalid authority to update allocation",
    },
    {
      code: 6138,
      name: "InvalidClubType",
      msg: "Club type not implemented",
    },
    {
      code: 6139,
      name: "InvalidMintOfNftToBuy",
      msg: "The mint of the NFT that the offer was made for is different",
    },
    {
      code: 6140,
      name: "WrongAmountOfOfferedToken",
      msg: "Wrong amount of offered token",
    },
    {
      code: 6141,
      name: "CanNotUpdateGovernanceConfig",
      msg: "Can not update governance with proposals in voting state",
    },
    {
      code: 6142,
      name: "UpdateGovernanceProposalActive",
      msg: "Update governance proposal active",
    },
    {
      code: 6143,
      name: "InvalidProposalState",
      msg: "Invalid proposal state",
    },
    {
      code: 6144,
      name: "ChangeClubConfigGovernanceAlredyCreated",
      msg: "Change club config governance alredy created",
    },
    {
      code: 6145,
      name: "InvalidAuthorityToStartStaking",
      msg: "Invalid role to start staking",
    },
    {
      code: 6146,
      name: "InvalidDepositRecordState",
      msg: "Invalid DepositRecord State",
    },
    {
      code: 6147,
      name: "ReservedRightsCannotBeOverridden",
      msg: "Reserved rights cannot be overridden",
    },
    {
      code: 6148,
      name: "ReservedRightsCannotSetAfterFundraise",
      msg: "Reserved rights cannot be set after fundraise",
    },
    {
      code: 6149,
      name: "WrongTreasuryForClub",
      msg: "Wrong treasury for club",
    },
    {
      code: 6150,
      name: "NotUniqueIndividualRight",
      msg: "Each pubkey for which individual rights is reserved must be unique",
    },
    {
      code: 6151,
      name: "IndividualRightNotExists",
      msg: "Individual right for authority does not exist",
    },
    {
      code: 6152,
      name: "NotEnoughVoteRights",
      msg: "Not enought vote rights to vote on this proposal",
    },
    {
      code: 6153,
      name: "CannotAddAndRemoveAllocation",
      msg: "You cannot add and remove allocation at the same time",
    },
    {
      code: 6154,
      name: "InvalidFundraiseCapAmount",
      msg: "Invalid fundraise cap amount",
    },
  ],
};
