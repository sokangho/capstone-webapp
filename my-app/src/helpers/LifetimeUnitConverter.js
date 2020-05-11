export default function LifetimeUnitConverter(lifetimeUnit, otpLifetime) {
  if (lifetimeUnit === 'minutes') {
    return otpLifetime * 60;
  }
  return otpLifetime;
}
