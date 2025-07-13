import { motion } from "framer-motion";
import { ArrowLeft, Shield, Coins, TrendingUp, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const BlockchainApp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-amber-500/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <Coins className="w-8 h-8 text-yellow-500" />
              <span className="bg-yellow-500/10 text-yellow-500 px-4 py-2 rounded-full text-sm font-medium">
                DeFi Platform
              </span>
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent mb-6"
            >
              Decentralized Finance & Smart Contract Platform
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              A comprehensive DeFi platform with automated yield farming, liquidity pools, 
              and governance tokens, securing over $50M in Total Value Locked (TVL).
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Article */}
          <div className="lg:col-span-8">
            <div className="prose prose-lg max-w-none">
              {/* Platform Overview */}
              <motion.section
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6 text-foreground">Platform Architecture</h2>
                <div className="bg-card rounded-xl p-8 border border-border shadow-lg">
                  <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                    Built a comprehensive DeFi ecosystem featuring automated market makers (AMM), 
                    yield farming protocols, and governance mechanisms. The platform handles millions 
                    of dollars in transactions daily with zero security incidents.
                  </p>
                  
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center p-4 bg-yellow-500/5 rounded-lg">
                      <Coins className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">$50M+</div>
                      <div className="text-sm text-muted-foreground">Total TVL</div>
                    </div>
                    <div className="text-center p-4 bg-green-500/5 rounded-lg">
                      <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">15%</div>
                      <div className="text-sm text-muted-foreground">Avg APY</div>
                    </div>
                    <div className="text-center p-4 bg-blue-500/5 rounded-lg">
                      <Shield className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">100%</div>
                      <div className="text-sm text-muted-foreground">Security Score</div>
                    </div>
                    <div className="text-center p-4 bg-purple-500/5 rounded-lg">
                      <Lock className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">25K+</div>
                      <div className="text-sm text-muted-foreground">Active Users</div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Smart Contracts */}
              <motion.section
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6 text-foreground">Smart Contract Architecture</h2>
                <div className="space-y-8">
                  {/* AMM Protocol */}
                  <div className="bg-card rounded-xl p-6 border border-border shadow-lg">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Automated Market Maker (AMM)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          Implemented a custom AMM protocol with dynamic fee structures and impermanent 
                          loss protection. Features constant product formula optimization and multi-asset 
                          pool support for improved capital efficiency.
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Trading Pairs:</span>
                            <span className="text-yellow-500 font-mono">50+</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Daily Volume:</span>
                            <span className="text-yellow-500 font-mono">$2.5M+</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Slippage:</span>
                            <span className="text-yellow-500 font-mono">&lt;0.3%</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2 text-foreground">Key Features</h4>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div>• Dynamic fee adjustment</div>
                          <div>• MEV protection mechanisms</div>
                          <div>• Multi-hop routing optimization</div>
                          <div>• Flash loan integration</div>
                          <div>• Governance-controlled parameters</div>
                          <div>• Cross-chain compatibility</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Yield Farming */}
                  <div className="bg-card rounded-xl p-6 border border-border shadow-lg">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Yield Farming Protocol</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Auto-Compounding Vaults</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                          Automated yield optimization strategies that compound rewards 
                          multiple times daily, maximizing returns for liquidity providers.
                        </p>
                        <div className="text-xs space-y-1 text-muted-foreground">
                          <div>• 24 compounds per day</div>
                          <div>• Gas cost optimization</div>
                          <div>• Risk-adjusted strategies</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Governance Rewards</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                          Token distribution mechanism with vesting schedules and 
                          voting power calculations for platform governance.
                        </p>
                        <div className="text-xs space-y-1 text-muted-foreground">
                          <div>• Linear vesting over 4 years</div>
                          <div>• Quadratic voting system</div>
                          <div>• Delegation mechanisms</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Smart Contract Code */}
              <motion.section
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h3 className="text-2xl font-bold mb-6 text-foreground">Core Smart Contract Implementation</h3>
                <div className="bg-card rounded-xl p-6 border border-border shadow-lg overflow-x-auto">
                  <pre className="text-sm text-muted-foreground">
                    <code>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AutoCompoundingVault is ReentrancyGuard, Ownable {
    using SafeMath for uint256;
    
    struct UserInfo {
        uint256 shares;
        uint256 lastDepositTime;
        uint256 rewardDebt;
    }
    
    IERC20 public immutable stakingToken;
    IERC20 public immutable rewardToken;
    
    uint256 public totalShares;
    uint256 public accRewardPerShare;
    uint256 public lastRewardTime;
    uint256 public rewardRate = 100; // 1% per day
    
    mapping(address => UserInfo) public userInfo;
    
    event Deposit(address indexed user, uint256 amount, uint256 shares);
    event Withdraw(address indexed user, uint256 shares, uint256 amount);
    event Compound(uint256 rewardsCompounded);
    
    constructor(
        IERC20 _stakingToken,
        IERC20 _rewardToken
    ) {
        stakingToken = _stakingToken;
        rewardToken = _rewardToken;
        lastRewardTime = block.timestamp;
    }
    
    function deposit(uint256 _amount) external nonReentrant {
        require(_amount > 0, "Cannot deposit 0");
        
        updateRewards();
        
        UserInfo storage user = userInfo[msg.sender];
        
        // Calculate shares to mint
        uint256 shares = totalShares == 0 ? _amount : 
            _amount.mul(totalShares).div(getTotalStaked());
        
        // Update user info
        user.shares = user.shares.add(shares);
        user.lastDepositTime = block.timestamp;
        user.rewardDebt = user.shares.mul(accRewardPerShare).div(1e12);
        
        totalShares = totalShares.add(shares);
        
        // Transfer tokens
        stakingToken.transferFrom(msg.sender, address(this), _amount);
        
        emit Deposit(msg.sender, _amount, shares);
    }
    
    function autoCompound() external {
        updateRewards();
        
        uint256 rewardBalance = rewardToken.balanceOf(address(this));
        if (rewardBalance > 0) {
            // Swap rewards for staking tokens (via DEX integration)
            uint256 compounded = swapRewardsForStaking(rewardBalance);
            
            emit Compound(compounded);
        }
    }
    
    function updateRewards() internal {
        if (block.timestamp <= lastRewardTime) return;
        
        if (totalShares == 0) {
            lastRewardTime = block.timestamp;
            return;
        }
        
        uint256 timeElapsed = block.timestamp.sub(lastRewardTime);
        uint256 reward = getTotalStaked().mul(rewardRate).mul(timeElapsed).div(86400).div(10000);
        
        accRewardPerShare = accRewardPerShare.add(
            reward.mul(1e12).div(totalShares)
        );
        
        lastRewardTime = block.timestamp;
    }
    
    function getPendingRewards(address _user) external view returns (uint256) {
        UserInfo memory user = userInfo[_user];
        uint256 _accRewardPerShare = accRewardPerShare;
        
        if (block.timestamp > lastRewardTime && totalShares != 0) {
            uint256 timeElapsed = block.timestamp.sub(lastRewardTime);
            uint256 reward = getTotalStaked().mul(rewardRate).mul(timeElapsed).div(86400).div(10000);
            _accRewardPerShare = _accRewardPerShare.add(
                reward.mul(1e12).div(totalShares)
            );
        }
        
        return user.shares.mul(_accRewardPerShare).div(1e12).sub(user.rewardDebt);
    }
}`}</code>
                  </pre>
                </div>
              </motion.section>

              {/* Security & Audits */}
              <motion.section
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6 text-foreground">Security & Performance</h2>
                <div className="bg-gradient-to-r from-yellow-500/5 to-amber-500/5 rounded-xl p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-foreground">Security Measures</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Multi-signature wallet implementation</li>
                        <li>• Time-locked governance proposals</li>
                        <li>• Emergency pause mechanisms</li>
                        <li>• Regular security audits (3 completed)</li>
                        <li>• Bug bounty program ($500K pool)</li>
                        <li>• Formal verification of critical functions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-foreground">Performance Metrics</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 0 security incidents to date</li>
                        <li>• 99.9% uptime guarantee</li>
                        <li>• Average 15-20 gwei gas optimization</li>
                        <li>• Sub-1% slippage on major pairs</li>
                        <li>• 25,000+ active users</li>
                        <li>• $2.5M+ daily trading volume</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Tech Stack */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-4 text-foreground">Technology Stack</h3>
                <div className="space-y-3">
                  {[
                    "Solidity", "Hardhat", "OpenZeppelin", "Chainlink", 
                    "React", "Web3.js", "IPFS", "The Graph"
                  ].map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                      <span className="text-muted-foreground">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* TVL Breakdown */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-xl p-6 border border-border shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-4 text-foreground">TVL Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Liquidity Pools:</span>
                    <span className="text-foreground">$28.5M</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Yield Farming:</span>
                    <span className="text-foreground">$15.2M</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Staking:</span>
                    <span className="text-foreground">$4.8M</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Governance:</span>
                    <span className="text-foreground">$1.5M</span>
                  </div>
                  <hr className="border-border" />
                  <div className="flex justify-between text-sm font-semibold">
                    <span className="text-foreground">Total TVL:</span>
                    <span className="text-yellow-500">$50.0M</span>
                  </div>
                </div>
              </motion.div>

              {/* Governance Stats */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-xl p-6 border border-border shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-4 text-foreground">Governance</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active Proposals:</span>
                    <span className="text-foreground">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Voting Power:</span>
                    <span className="text-foreground">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Token Holders:</span>
                    <span className="text-foreground">12,500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Quorum:</span>
                    <span className="text-foreground">4%</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainApp;