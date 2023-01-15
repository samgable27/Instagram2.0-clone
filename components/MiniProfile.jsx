import React from "react";

export const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="w-16 h-16 rounded-full border p-[2px]"
        src="https://scontent-lga3-2.xx.fbcdn.net/v/t1.18169-9/22489719_10155791768243236_2244555154093275026_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_VjNAwh3Bw8AX_vcVOp&_nc_ht=scontent-lga3-2.xx&oh=00_AfBmnNYW0kclv5GyZipZ76fhH_t505W4okGV7cbbIJ73WQ&oe=63EA9511"
        alt=""
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">fullthrottledub</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
};
